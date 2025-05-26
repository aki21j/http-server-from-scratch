const net = require("net")

const newConn = (socket) => {
  console.log('new connection:', socket.remoteAddress, socket.remotePort)

  socket.on('end', () => {
    console.log("EOF");
  })
  
  socket.on('data', (data) => {
    console.log("Data:", data)
    socket.write(data);
  
    if(data.includes('q')){
      console.log("Closing socket")
      socket.end();
    }
  })
}

let server = net.createServer();
server.on('error', (err) => { throw err; });
server.on('connection', newConn)
server.listen({ host: '127.0.0.1', port: 1234});