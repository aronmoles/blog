import Post from './post';
import PostSlug from './post-slug.vo';
import {Optional} from '../../shared/domain/optional';

export default interface PostRepository {
    findAll(): Promise<Post[]>
    findBySlug(slug: PostSlug): Promise<Optional<Post>>
}
