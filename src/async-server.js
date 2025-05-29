const net = require("net")

function soRead(conn) {
  console.assert(!conn.reader)

  return new Promise((resolve, reject) => {
    if(conn.err){
      reject(conn.err)
      return
    }

    if(conn.ender){
      resolve(Buffer.from(''))
      return
    }

    conn.reader = {resolve, reject}
    conn.socket.resume();
  })
}

function soWrite(conn, data){
  console.assert(data.length > 0)
  return new Promise((resolve, reject) => {
    if(conn.error){
      reject(conn.error)
      return
    }
    conn.socket.write(data, (err) => {
      if (err) {
          reject(err);
      } else {
          resolve();
      }
    });
  })
}


function soInit(socket) {
  const conn = {
    socket: socket
  }

  socket.on('data', (data) =>{
    console.assert(conn.reader);
    conn.socket.pause();
    conn.reader.resolve(data)
    conn.reader = null
  })

  socket.on("end", () => {
    conn.ender = true;
    if(conn.reader) {
      conn.reader.resolve(Buffer.from(''))
      conn.reader = null
    }
  })
  
  socket.on("error", (err) => {
    conn.err = err;
    if(conn.reader) {
      conn.reader.reject(err)
      conn.reader = null
    }
  })
  
  return conn
}

const server = net.createServer({
  pauseOnConnect: true,   // required by `TCPConn`
});

async function newConn(socket) {
  console.log('new connection:', socket.remoteAddress, socket.remotePort)

  try {
    await serveClient(socket);
  } catch (exc) {
      console.error('exception:', exc);
  } finally {
      socket.destroy();
  }
}

async function serveClient(socket) {
  const conn = soInit(socket);
  while (true) {
      const data = await soRead(conn);
      if (data.length === 0) {
          console.log('end connection');
          break;
      }

      console.log('data', data);
      await soWrite(conn, data);
  }
}

// Add server error handling
server.on('error', (err) => {
  console.error('Server error:', err);
  throw err;
});

// Add connection handler
server.on('connection', newConn);

server.listen({ host: '127.0.0.1', port: 1234});
