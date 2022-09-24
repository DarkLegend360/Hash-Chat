export const fetchAccountHandle = async (socket: any, userName: any) => {
  socket.emit('fetchAccountHandle', userName);
};
