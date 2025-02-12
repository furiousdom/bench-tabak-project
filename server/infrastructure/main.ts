import Bottle from 'bottlejs';
import { Services as DbServices } from '../database';
import setupUserModule from '../user';

const bottle = new Bottle();

function setupDependencies(dbServices: DbServices) {
  bottle.factory('DbServices', () => dbServices);
  setupUserModule(bottle);
  return bottle;
}

export { bottle, setupDependencies };
