import {StringValueObject} from '../../shared/domain/value-object/string.value-object';

export default class PostSlug extends StringValueObject  {
    static fromString(slug: string): PostSlug {
        return new PostSlug(slug);
    }

    static fromFilePath(filePath: string) {
        const parts = filePath.split('/');
        const fileName = parts[parts.length - 1];
        const slug = fileName.replace(/\.md/, '');
        return new PostSlug(slug);
    }
}
