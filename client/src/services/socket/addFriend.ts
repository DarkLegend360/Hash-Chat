export const addToFriendsList = (
  socket: any,
  myAccountHandle: string,
  targetAccountHandle: string
) => {
  socket.emit('addToFriendsList', { myAccountHandle, targetAccountHandle });
};
