import Link from 'next/link'
import Button from '../ui/button'
import ButtonAnimated from '../ui/button-animated'

const links = [
  {
    label: 'Our Focus',
    href: '#',
  },
  {
    label: 'Why Us',
    href: '#',
  },
  {
    label: 'Our Approach',
    href: '#',
  },
]

export default function Header() {
  return (
    <header className="p-4 relative z-10 bg-primary border-b-2 border-secondary/10">
      <nav className="flex container mx-auto items-center">
        <div className="text-2xl font-bold min-w-[170px]">
          <Link href="/">Logo</Link>
        </div>

        <div className="flex gap-6 items-center justify-center mx-auto">
          {links.map(item => (
            <Link key={item.label} href={item.href} className="text-gray-300 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <Button variant="secondary">Join the Revolution</Button>
      </nav>
    </header>
  )
}
