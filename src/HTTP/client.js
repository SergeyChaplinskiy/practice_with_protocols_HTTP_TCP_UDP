const http = require('http');

const options = {
  host: 'localhost',
  port: 5000,
  path: '/admin',
  method: 'PUT',
};

const req = http.request(options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});
req.end();
