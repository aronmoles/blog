import {StringValueObject} from '../../shared/domain/value-object/string.value-object';

export default class PostTag extends StringValueObject {
    static fromString(slug: string): PostTag {
        return new PostTag(slug);
    }
}
