const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const { v4: generateHash } = require("uuid");
const MongoClient = require("mongodb").MongoClient;

const PORT = 4000;
const DB_HOST = "mongodb://localhost:27017/";

const client = new MongoClient(DB_HOST);
const io = new Server(server);

server.listen(PORT, () => console.log("Server is running on port:", PORT));

const addNewUser = async (socketId, userName) => {
  try {
    const users = client.db("users");
    const usersCollection = users.collection("users");
    console.log("Connected successfully to users table");
    const data = { userName, accountHandle: generateHash(), socketId };
    usersCollection.insertOne(data, (err, res) => {
      if (err) {
        throw err;
      }
      console.log("New User Added To HashChat.");
    });
    return data;
  } catch (err) {
    console.log("Could Not Add new User", err);
  }
};

const addToFriendList = async (myAccountHandle, targetAccountHandle) => {
  try {
    const friendList = client.db("friendList");
    console.log("Connected successfully to friendList table");
    const myList = friendList.collection(myAccountHandle);
    const targetList = friendList.collection(targetAccountHandle);
    myList.insertOne({ accountHandle: targetAccountHandle }, (err, res) => {
      if (err) {
        throw err;
      }
      console.log("myList Success.");
    });
    targetList.insertOne({ accountHandle: myAccountHandle }, (err, res) => {
      if (err) {
        throw err;
      }
      console.log("targetList Success");
    });
  } catch (err) {
    console.log("Could not add Friend to DB", err);
  }
};

const addMessageToQueue = async (messageData) => {
  try {
    const { receiverHandle } = messageData;
    const chats = client.db("chats");
    console.log("Connected successfully to chats table");
    const messageDetails = { ...messageData, timestamp: Date.now() };
    chats.collection(receiverHandle).insertOne(messageDetails, (err, res) => {
      if (err) {
        throw err;
      }
      console.log("Message successfully added to DB.");
    });
  } catch (err) {
    console.log("Could not add message to DB", err);
  }
};

const fetchAccountHandle = async (socketId, userName) => {
  try {
    const users = client.db("users");
    const usersCollection = users.collection("users");
    console.log("Connected successfully to users table");
    const result = await usersCollection.findOne({ userName });
    if (result) {
      await usersCollection.updateOne({ userName }, { $set: { socketId } });
      return { ...result, socketId };
    }
    return await addNewUser(socketId, userName);
  } catch (err) {
    console.log(err);
  }
};

const searchByUserName = async (userName) => {
  try {
    const users = client.db("users");
    const usersCollection = users.collection("users");
    console.log("Connected successfully to users table to perform search");
    const result = await usersCollection.find({
      userName: new RegExp(userName),
    });
    return result.toArray();
  } catch (err) {
    console.log(err);
  }
};

const searchByAccountHandle = async (accountHandle) => {
  try {
    const users = client.db("users");
    const usersCollection = users.collection("users");
    console.log(
      "Connected successfully to users table to perform search by handle"
    );
    const result = await usersCollection.findOne({
      accountHandle,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

const fetchFriendsList = async (accountHandle) => {
  try {
    const friends = client.db("friendList");
    const friendsCollection = friends.collection(accountHandle);
    console.log("Connected successfully friends table");
    const result = await friendsCollection.find();
    return result.toArray();
  } catch (err) {
    console.log(err);
  }
};

const fetchAllMessages = async (accountHandle) => {
  try {
    const chats = client.db("chats");
    const chatCollection = chats.collection(accountHandle);
    console.log("Connected successfully chats table");
    const result = await chatCollection.find({});
    const resultArray = await result.toArray();
    const uniqueIds = new Set(resultArray?.map((item) => item.senderHandle));
    const finalResult = [...resultArray];
    for (const user of uniqueIds) {
      const message = await chats.collection(user).find({
        senderHandle: accountHandle,
      });
      finalResult.push(...(await message.toArray()));
    }
    console.log(finalResult);
    return finalResult;
  } catch (err) {
    console.log(err);
  }
};

io.on("connection", async (socket) => {
  console.log("User Connected: ", socket.id);
  try {
    await client.connect();
  } catch (err) {
    console.log("Connection Failed");
    return;
  }
  socket.on("fetchAccountHandle", async (userName) => {
    const userData = await fetchAccountHandle(socket.id, userName);
    socket.emit("accountHandleSuccess", userData);
  });

  socket.on("searchByUserName", async (userName) => {
    const searchResults = await searchByUserName(userName);
    socket.emit("searchResult", searchResults);
  });

  socket.on("addToFriendsList", async (handles) => {
    const { myAccountHandle, targetAccountHandle } = handles;
    await addToFriendList(myAccountHandle, targetAccountHandle);
  });

  socket.on("fetchFriendsList", async (accountHandle) => {
    const friendsList = await fetchFriendsList(accountHandle);
    const friendsDetails = [];
    console.log({ friendsList });
    for (const friend of friendsList) {
      const userData = await searchByAccountHandle(friend.accountHandle);
      const { userName, accountHandle } = userData;
      friendsDetails.push({ userName, accountHandle });
    }
    socket.emit("friendsList", friendsDetails);
  });

  socket.on("sendMessage", async (messageData) => {
    await addMessageToQueue(messageData);
  });

  socket.on("fetchMessages", async (accountHandle) => {
    const allMessages = await fetchAllMessages(accountHandle);
    console.log(accountHandle, allMessages, "HOOAAAA");
    socket.emit("fetchMessagesSuccess", allMessages);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    client.close();
  });
});

app.get("/", (req, res) => {
  res.send(searchByUserName("ar"));
});
