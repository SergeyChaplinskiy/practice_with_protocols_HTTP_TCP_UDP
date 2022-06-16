const net = require('net');

const port = 5000;

const client = net.connect({ port }, () => {
  console.log('connected to server!');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.write('connection to the server!');
});

client.on('end', () => {
  console.log('disconnected from server');
});
