import bodyParser from 'koa-bodyparser';
import config from './config';
import Koa from 'koa';
import { router as userRouter } from './user/index';

const { PORT } = config;

const app = new Koa();

app.use(bodyParser());
app.use(userRouter.routes());

const server = app
  .listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`))
  .on('error', err => console.error(err));

export default server;
