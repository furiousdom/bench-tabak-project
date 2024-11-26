import Koa from 'koa';

const PORT = 3000;

const app = new Koa();

const server = app
  .listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`))
  .on('error', err => console.error(err));

export default server;
