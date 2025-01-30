import { EntityManager } from '@mikro-orm/core';

function Workable(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (this: { em: EntityManager }, ...args: any[]) {
    if (!this.em) {
      throw new Error("EntityManager is not available in the class.");
    }

    const em = this.em.fork();

    if (args.length > 0 && args[0] instanceof EntityManager) {
      return originalMethod.apply(this, args);
    }

    return originalMethod.apply(this, [em, ...args]);
  };

  return descriptor;
}

export {
  Workable
};
