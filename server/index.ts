import { getDatabase } from './database/index';
import runApp from './app';

getDatabase()
  .then(dbServices => runApp(dbServices));
