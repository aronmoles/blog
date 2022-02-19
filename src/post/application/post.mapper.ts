import PostDto from './post.dto';
import Post from '../domain/post';

export default class PostMapper {
    public toDto(post: Post): PostDto {
        return ({
            slug: post.slug.value(),
            title: post.title.value(),
            date: post.date.toDateString(),
            content: post.content.value(),
            tags: post.tags.map((tag) => tag.value())
        })
    }
}
