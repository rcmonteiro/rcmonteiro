import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex m-4 justify-between items-center p-4 max-w-screen-xl">
      <Link href="/" className=" no-underline">
        <h1 className="text-2xl font-bold font-mono">&lt;rcmonteiro/&gt;</h1>
      </Link>
      <nav className="flex justify-end gap-4 items-center">
        <Link href="https://www.linkedin.com/in/ricardo-monteiro/">
          <LinkedinLogo size={32} weight="light" />
        </Link>
        <Link href="https://github.com/rcmonteiro/">
          <GithubLogo size={32} weight="light" />
        </Link>
      </nav>
    </header>
  )
}
