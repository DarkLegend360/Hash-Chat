export const searchByUserName = (socket: any, userName: string) => {
  socket.emit('searchByUserName', userName);
};
