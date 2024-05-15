import { Post } from '@/domain/entities/post'
import type { PostRepository } from '@/domain/repositories/post-repository'
import * as fs from 'node:fs'
import path from 'node:path'
import { MarkdownParser } from '../providers/markdown-parser'

export class FilePostRepository implements PostRepository {
  private postsDirectory = path.join(process.cwd(), '_posts')

  async findBySlug(slug: string): Promise<Post | null> {
    const filePath = path.join(this.postsDirectory, `${slug}.md`)
    if (!fs.existsSync(filePath)) {
      return null
    }
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { title, date, content, excerpt, project, tags } =
      await MarkdownParser.parse(fileContents)
    return new Post(slug, title, content, excerpt, date, project, tags)
  }

  async findRecent(limit: number): Promise<Post[]> {
    const slugs = fs.readdirSync(this.postsDirectory)
    const postPromises = slugs.map(async (slug) => {
      const post = await this.findBySlug(slug.replace(/\.md$/, ''))
      if (!post) {
        throw new Error(`Post with slug ${slug} not found`)
      }
      return post
    })
    const posts = await Promise.all(postPromises)
    return posts.slice(0, limit)
  }
}
