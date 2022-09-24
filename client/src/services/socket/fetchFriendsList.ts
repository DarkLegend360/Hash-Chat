export const fetchFriendsList = (socket: any, accountHandle: string) => {
  socket.emit('fetchFriendsList', accountHandle);
};
