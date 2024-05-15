import { FilePostRepository } from '@/infra/repositories/file-post-repository'
import { PostService } from '@/services/post-service'
import { PostBody } from '@/ui/post/post-body'
import { PostProject } from '@/ui/post/post-project'
import { PostTags } from '@/ui/post/post-tags'
import { PostTitle } from '@/ui/post/post-title'
import { notFound } from 'next/navigation'

export default async function Post({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const postService = new PostService(new FilePostRepository())
  const post = await postService.findBySlug(slug)

  if (!post) {
    return notFound()
  }

  return (
    <main className="my-4 mx-8 max-w-screen-xl">
      <PostProject project={post.project} date={post.date} />
      <PostTitle>{post.title}</PostTitle>
      <PostTags>{post.tags}</PostTags>
      <PostBody>{post.body}</PostBody>
    </main>
  )
}
