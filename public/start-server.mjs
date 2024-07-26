import { createServer } from 'http';

import serve from 'serve-handler';
 
const server = createServer((req, res) => {

  return serve(req, res, {

    public: 'build',

    rewrites: [

      { source: '**', destination: '/index.html' }

    ]

  }).catch(err => {

    console.error('Error serving files:', err);

    res.writeHead(500, { 'Content-Type': 'text/plain' });

    res.end('Internal Server Error');

  });

});
 
const port = process.env.PORT || 3000;

server.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`);

});

 
