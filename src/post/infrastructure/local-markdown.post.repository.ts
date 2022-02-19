import path from 'path';
import * as fs from 'fs';
import PostRepository from '../domain/post.repository';
import Post from '../domain/post';
import PostSlug from '../domain/post-slug.vo';
import {Optional} from '../../shared/domain/optional';
import matter from 'gray-matter';
import {marked} from 'marked';
import PostTag from '../domain/post-tag.vo';
import PostDate from '../domain/post-date.vo';
import PostContent from '../domain/post-content.vo';
import PostTitle from '../domain/post-title.vo';

export default class LocalMarkdownPostRepository implements PostRepository {
    constructor(
        private readonly dataDir: string,
    ) {
    }

    async findAll(): Promise<Post[]> {
        return fs.readdirSync(this.dataDir)
            .map((filePath) => path.join(this.dataDir, filePath))
            .filter((filePath) => fs.lstatSync(filePath).isFile())
            .map(this.buildPostFromFilePath)
            .sort((p1, p2) => p1.date.compareTo(p2.date))
    }

    async findBySlug(slug: PostSlug): Promise<Optional<Post>> {
        const filePath = path.join(this.dataDir, `${slug.value()}.md`)
        if (!fs.existsSync(filePath)) {
            return undefined;
        }

        return this.buildPostFromFilePath(filePath);
    }

    private buildPostFromFilePath(filePath: string) {
        const meta = matter(fs.readFileSync(filePath))
        const tags = meta.data.tags.split(',').map((tag: string) => tag.trim())
        const htmlContent = marked(meta.content)
        const slug = PostSlug.fromFilePath(filePath);

        return new Post(
            slug,
            PostTitle.fromString(meta.data.title),
            PostDate.fromString(meta.data.date),
            tags.map((tag: string) => PostTag.fromString(tag)),
            PostContent.fromString(htmlContent),
        );
    }
}
