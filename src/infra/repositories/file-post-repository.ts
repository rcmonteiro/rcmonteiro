import { Post } from '@/domain/entities/post'
import type { PostRepository } from '@/domain/repositories/post-repository'
import fs from 'node:fs'
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
    const { title, date, content, project, tags } =
      await MarkdownParser.parse(fileContents)
    return new Post(title, content, date, project, tags)
  }
}
