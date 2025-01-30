import config from './config';
import { getDatabase } from './database/index';
import setupApp from './app';

const { PORT } = config;

getDatabase()
  .then(dbServices => setupApp(dbServices))
  .then(app => app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`)));
