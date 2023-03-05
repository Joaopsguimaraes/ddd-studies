import { UniqueEntityID } from './unique-entity-id';

export abstract class Entity<T = any> {
  protected readonly _id: UniqueEntityID;

  constructor(public readonly props: T, anId?: UniqueEntityID) {
    this._id = anId || new UniqueEntityID();
  }

  get id(): string {
    return this._id.value;
  }

  public toJSON(): Required<{ id: string } & T> {
    return {
      id: this.id,
      ...this.props
    } as Required<{ id: string } & T>;
  }
}
