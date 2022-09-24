export const fetchMessages = (socket: any, accountHandle: any) => {
  socket.emit('fetchMessages', accountHandle);
};
