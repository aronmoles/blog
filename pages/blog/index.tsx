import type {GetStaticProps, NextPage} from 'next'
import PostDto from '../../src/post/application/post.dto';
import Link from 'next/link';
import LocalMarkdownPostRepository from '../../src/post/infrastructure/local-markdown.post.repository';
import PostMapper from '../../src/post/application/post.mapper';

interface PostsPageProps {
    posts: PostDto[],
}

const PostsPage: NextPage<PostsPageProps> = ({posts}) => {
    return (
        <div>
            {posts.map(({slug, title, tags, date}) => (
                <Link href={`/post/${slug}`} passHref={true} key={slug}>
                    <section >
                        <h3>{title} <small>{date}</small></h3>
                        <p>{tags.join(', ')}</p>
                    </section>
                </Link>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = await new LocalMarkdownPostRepository('./data').findAll();
    return {
        props: {
            posts: posts.map(new PostMapper().toDto),
        },
    }
}

export default PostsPage
