import dayjs from 'dayjs'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="flex m-4 gap-4 items-center justify-end max-w-screen-xl">
      <span>&copy; {dayjs().year()} rcmonteiro. All rights reserved.</span>
      <Link
        className="text-highlight"
        href="https://github.com/rcmonteiro/rcmonteiro-web"
      >
        View on GitHub
      </Link>
    </footer>
  )
}
