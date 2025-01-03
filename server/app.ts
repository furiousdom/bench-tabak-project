import bodyParser from 'koa-bodyparser';
import config from './config';
import Koa from 'koa';
import router from './router';

const { PORT } = config;

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

function runApp(): Promise<void> {
  return new Promise((resolve, reject) => {
    app
      .listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`))
      .on('error', err => err ? reject(err) : resolve());
  });
}

export default runApp;
