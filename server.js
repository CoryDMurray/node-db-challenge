const express = require('express');

const server = express();

const projectRouter = require('./projects/projectRouter')
server.use('/data', projectRouter);


server.listen(4000, () => {
  console.log('=== server listening on port 4000 ===');
});

server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Posts API</h>
      <p>Welcome to the Lambda Posts API</p>
    `);
});