import type {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import PostSlug from '../../src/post/domain/post-slug.vo';
import renderHTML from 'react-render-html';
import PostDto from '../../src/post/application/post.dto';
import PostMapper from '../../src/post/application/post.mapper';
import LocalMarkdownPostRepository from '../../src/post/infrastructure/local-markdown.post.repository';

const PostPage: NextPage<PostDto> = ({slug, title, date, content}) => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>

            <h1>Slug: {slug}</h1>
            <h2>{title} <small>{date}</small></h2>

            {renderHTML(content)}
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await new LocalMarkdownPostRepository('./data').findAll();
    const paths = posts.map((post) => ({params: {slug: post.slug.value()}}))
    return {
        paths: paths,
        fallback: false // false or 'blocking'
    };
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = PostSlug.fromString(context.params?.slug as string);

    const post = await new LocalMarkdownPostRepository('./data').findBySlug(slug);
    if (!post) {
        return {
            notFound: true,
        }
    }
    return {
        props: new PostMapper().toDto(post),
    }
}

export default PostPage
