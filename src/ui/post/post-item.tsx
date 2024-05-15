import Link from 'next/link'
import { PostExcerpt } from './post-excerpt'
import { PostProject } from './post-project'
import { PostTags } from './post-tags'
import { PostTitle } from './post-title'

export const PostItem = () => {
  return (
    <div className="border-b-1 border-base">
      <Link className="no-underline" href="/post/hello">
        <PostProject
          project="Travel Booking Hub"
          date="2024-05-14T18:50:00.000Z"
        />
        <PostTitle>Setup mono repo with turborepo</PostTitle>
        <PostTags>{['docker', 'turborepo']}</PostTags>
        <PostExcerpt>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          rhoncus velit, eget finibus tortor sagittis et
        </PostExcerpt>
      </Link>
    </div>
  )
}
