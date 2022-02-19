import PostSlug from './post-slug.vo';
import PostTitle from './post-title.vo';
import PostTag from './post-tag.vo';
import PostContent from './post-content.vo';
import PostDate from './post-date.vo';

export default class Post {
    constructor(
        private readonly _slug: PostSlug,
        private readonly _title: PostTitle,
        private readonly _date: PostDate,
        private readonly _tags: PostTag[],
        private readonly _content: PostContent,
    ) {
    }

    get slug(): PostSlug {
        return this._slug;
    }

    get title(): PostTitle {
        return this._title;
    }

    get date(): PostDate {
        return this._date;
    }

    get tags(): PostTag[] {
        return this._tags;
    }

    get content(): PostContent {
        return this._content;
    }
}
