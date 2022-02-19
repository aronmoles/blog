import {PrimitiveType} from '../primitive-type';
import {InvalidArgumentError} from './invalid-argument.error';
import {isNullOrUndefined} from '../is-null-or-undefined';

export abstract class ValueObject<T extends PrimitiveType> {
    constructor(private readonly _value: T) {
        this.ensureValueIsDefined(_value);
        this.ensureValidValue(_value);
    }

    private ensureValueIsDefined(value: T): void {
        if (isNullOrUndefined(value)) {
            throw new InvalidArgumentError('Value must be defined');
        }
    }

    protected ensureValidValue(_value: T) {
    }

    public value(): T {
        return this._value;
    }

    public equals(other: ValueObject<T>): boolean {
        return (
            this.constructor.name === other.constructor.name &&
            this.value() === other.value()
        );
    }
}
