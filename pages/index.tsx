import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const menuItems = [
  { url: '#about', label: 'Home' },
  { url: '#projects', label: 'About' },
  { url: '#contact', label: 'Contact' },
];

export default function Home() {
  return (
    <main>
        <Navbar
        logo="/path/to/logo.png"
        menu={menuItems}
        contactText="Contact me"
      />
    </main>
  )
}
