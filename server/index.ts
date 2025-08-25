import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = parseInt(process.env.PORT || '5000', 10);

app.prepare().then(() => {
  const server = express();

  // Handle all routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`> Ready on http://0.0.0.0:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});