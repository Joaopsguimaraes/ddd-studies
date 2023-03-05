import { deepFreeze } from './deep-freeze';

interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<Value = ValueObjectProps> {
  protected readonly _value: Value;

  constructor(aValue: Value) {
    this._value = deepFreeze(aValue);
  }

  get value(): Value {
    return this._value;
  }

  toString: () => string = (): string => {
    if (typeof this.value !== 'object' || this.value === null) {
      try {
        return this.value.toString();
      } catch (e) {
        return this.value + '';
      }
    }
    const valueToString: string = this.value.toString();
    return valueToString === '[object Object]'
      ? JSON.stringify(this.value)
      : valueToString;
  };
}

export default ValueObject;
