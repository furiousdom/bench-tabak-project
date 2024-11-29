import { initDatabase } from './database/index';
import runApp from './app';

initDatabase()
  .then(() => runApp());
