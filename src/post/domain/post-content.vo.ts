import {StringValueObject} from '../../shared/domain/value-object/string.value-object';

export default class PostContent extends StringValueObject {
    static fromString(slug: string): PostContent {
        return new PostContent(slug);
    }
}
