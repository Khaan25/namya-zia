import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-5 bg-primary text-white/60 border-t border-white/20">
      <div className="container w-full mx-auto flex items-center justify-center text-center">
        Brought to you{' '}
        <Link href="https://zzia.vercel.app" target="_blank" className="underline underline-offset-4 hover:text-white">
          Zia Ur Rehman
        </Link>
      </div>
    </footer>
  )
}
