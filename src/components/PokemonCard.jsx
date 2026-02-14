import { Link } from 'react-router-dom'

function PokemonCard({ pokemon }) {
  const id = pokemon.url.split('/').filter(Boolean).pop()

  return (
    <Link to={`/pokemon/${pokemon.name}`} className="card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
    </Link>
  )
}

export default PokemonCard
