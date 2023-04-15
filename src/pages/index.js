import styles from '@/styles/Home.module.css'

import Image from 'next/image'

import Card from '../components/Card'

export async function getStaticProps() {

  const maxPokemons = 126
  const api = 'http://pokeapi.co/api/v2/pokemon/'
  const pokemons = []

  for (let i = 1; i <= maxPokemons; i++) {
    let res = await fetch(`${api}/${i}`)
    let data = await res.json()

    let abilities = []

    for (let ability of data.abilities) {
      abilities.push(ability.ability.name)
    }

    let pokemon = {
      id: i,
      name: data.name,
      abilities,
      type: data.types[0].type.name
    }
    pokemons.push(pokemon)
  }

  return ({
    props: {
      pokemons,
    },
  })
}

export default function Home({ pokemons }) {

  return (
    <div className={styles.pokemon_container}>
      {/* between parentheses because it returns a object */}
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
