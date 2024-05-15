import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="max-w-screen-xl justify-center flex">
      <div className="p-4 flex flex-col-reverse sm:flex-row items-center gap-6">
        <div className="p-4 space-y-8 text-4xl font-bold">
          <p>Hello there o/</p>
          <p>
            Here&apos;s what I&apos;m currently
            <br />
            working on
          </p>
        </div>
        <Image
          src="/rcmonteiro.jpeg"
          priority
          height={256}
          width={256}
          className="rounded-full border-4 border-highlight"
          alt="rcmonteiro avatar"
        />
      </div>
    </div>
  )
}
