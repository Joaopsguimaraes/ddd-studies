import { randomUUID } from 'node:crypto';

export class UniqueEntityID {
  private readonly _id: string;

  constructor(readonly id?: string) {
    this._id = id || randomUUID();
  }

  get value(): string {
    return this._id;
  }
}
