import {ValueObject} from './value-object';

export abstract class StringValueObject extends ValueObject<string> {
    protected constructor(value: string) {
        super(value);
    }
}
