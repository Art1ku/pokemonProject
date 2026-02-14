import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

function PokemonList({ search }) {
  const [pokemons, setPokemons] = useState([])
  const [allLoaded, setAllLoaded] = useState(false)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=121')
      .then(res => res.json())
      .then(data => setPokemons(data.results))
  }, [])

  useEffect(() => {
    if (pokemons.length === 121 && !allLoaded) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1350')
        .then(res => res.json())
        .then(data => {
          setPokemons(data.results)
          setAllLoaded(true)
        })
    }
  }, [pokemons, allLoaded])

  const filtered = pokemons.filter(p =>
    p.name.includes(search.toLowerCase())
  )

  return (
    <div className="grid">
      {filtered.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList
