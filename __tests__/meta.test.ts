import matter from 'gray-matter';
import { marked } from 'marked';
import * as fs from 'fs';

describe('Meta' , () => {
    it('Meta', () => {
        const meta = matter(fs.readFileSync('./data/example.md'))
        console.warn('META', meta)

        const html = marked(meta.content)
        console.warn('HTML', html)
    })
})
