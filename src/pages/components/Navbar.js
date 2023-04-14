import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image src="/images/pokeball3.png"
          width="30"
          height="30"
          alt="pokeball-logo"
        />
        <h1>Pokedex</h1>
      </div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}