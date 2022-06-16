const http = require('http');
const fs = require('fs');

const admin = {
  name: 'Sergey',
  LastName: 'Chaplinskiy',
  favoriteLesson: ['physical education', 'Maths', 'Informatics'],
  course: 2,
};

const port = 5000;

const server = http.createServer((req, res) => {
  const { url } = req;
  const { method } = req;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is home Page.');
    res.end();
  }

  if (url === '/login') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const html = fs.readFileSync('./student.html');
      res.write(html);
      res.end();
    }

    if (method === 'POST') {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        res.end(data);
      });
    }
  }

  if (url === '/admin') {
    if (method === 'PUT') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(admin));
      res.end();
    }
  }
});

server.listen(port, () => {
  console.log(`Node.js web server at port ${port} is running..`);
});
