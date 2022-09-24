import io, { Socket as SocketType } from 'socket.io-client';

const URI = 'http://127.0.0.1:4000';

const Socket = (function () {
  var instance: SocketType;

  function createInstance() {
    return io(URI);
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export { Socket, SocketType };
