import LocalMarkdownPostRepository from '../../../src/post/infrastructure/local-markdown.post.repository';
import PostSlug from '../../../src/post/domain/post-slug.vo';

describe('LocalMarkdownPostRepository', () => {
    const postRepository = new LocalMarkdownPostRepository('./__tests__/posts/infrastructure/data')

    describe('findAll', () => {
        it('should return a list of posts', async () => {
            const posts = await postRepository.findAll();

            expect(posts).toBeDefined()
            expect(posts.length).toEqual(1)
        })
    })

    describe('findBySlug', () => {
        it('should return a existent post with slug', async () => {
            const slug = PostSlug.fromString('example')

            const post = await postRepository.findBySlug(slug);

            expect(post).toBeDefined()
        })

        it('should return a undefined if post slug not exists', async () => {
            const slug = PostSlug.fromString('fail')

            const post = await postRepository.findBySlug(slug);

            expect(post).not.toBeDefined()
        })
    })
})
