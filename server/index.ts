import config from './config';
import { getDatabase } from './database/index';
import setupApp from './app';
import { setupDependencies } from './infrastructure/main';

const { PORT } = config;

getDatabase()
  .then(dbServices => setupDependencies(dbServices))
  .then(bottle => setupApp(bottle))
  .then(app => app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`)));
