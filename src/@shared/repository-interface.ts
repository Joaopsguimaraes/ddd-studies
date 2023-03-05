export abstract class RepositoryInterface<T> {
  abstract save(entity: T): Promise<void>;
  abstract update(entity: T): Promise<void>;
  abstract findById(anId: string): Promise<T>;
  abstract delete(anId: string): Promise<void>;
  abstract findAll(): Promise<T[]>;
}
