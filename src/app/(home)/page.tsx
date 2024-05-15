import { Hero } from '@/ui/home/hero'
import { PostItem } from '@/ui/post/post-item'

export default function Home() {
  return (
    <main className="max-w-screen-xl">
      <Hero />
      <div className="m-16 mt-24 space-y-8">
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </main>
  )
}
