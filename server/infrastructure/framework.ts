import Bottle from 'bottlejs';
import { Services as DbServices } from '../database';
import setupUserModule from '../user';

const bottle = new Bottle();

async function setupDependencies(dbServices: DbServices) {
  setupUserModule(bottle, dbServices);
}

export { bottle, setupDependencies };
