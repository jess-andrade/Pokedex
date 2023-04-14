import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About this Project</h1>
      <p> Hey Human, I made this <b>Pokedex Project</b> using<br /> <a style={{ textDecoration: 'none', color: '#48FFF4' }} href="https://nextjs.org/docs">Next.js</a> and <a style={{ textDecoration: 'none', color: '#48FFF4' }} href="https://pokeapi.co/">PokeAPI</a></p>
      <p>for the Drawer and Cards I used <a style={{ textDecoration: 'none', color: '#48FFF4' }} href="https://nextjs.org/docs">MUI</a></p>
      <Image src='/images/snorlax2.gif'
        width='200'
        height='200'
        alt='snorlax'
      />
    </div >
  )
}