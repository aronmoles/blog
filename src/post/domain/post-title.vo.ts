import {StringValueObject} from '../../shared/domain/value-object/string.value-object';

export default class PostTitle extends StringValueObject {
    static fromString(slug: string): PostTitle {
        return new PostTitle(slug);
    }
}
