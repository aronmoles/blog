import {StringValueObject} from './string.value-object';
import {InvalidEmailError} from './invalid-email.error';

export class EmailValueObject extends StringValueObject {
    protected ensureValidValue(email: string) {
        if (!this.isValidEmail(email)) {
            throw new InvalidEmailError(email);
        }
    }

    private isValidEmail(email: string) {
        return String(email)
            .toLowerCase()
            .match(
                // eslint-disable-next-line max-len,prefer-named-capture-group
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    }
}
