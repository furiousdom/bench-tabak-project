export class Container {
  private dependencies = new Map<string, any>();

  register<T>(name: string, implementation: T): void {
    this.dependencies.set(name, implementation);
  }

  resolve<T>(name: string): T {
    const dependency = this.dependencies.get(name);
    if (!dependency) {
      throw new Error(`Dependency '${name}' not found`);
    }
    return dependency;
  }
}
