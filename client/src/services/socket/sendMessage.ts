export const sendMessage = (socket: any, messageData: any) => {
  socket.emit('sendMessage', messageData);
};
