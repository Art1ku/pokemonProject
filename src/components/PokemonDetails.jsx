import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './all.css'

function PokemonDetails() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [name])

  if (!pokemon) return <h2 className="loading">Loading...</h2>

  return (
    <div className="details-page">
      <Link to="/" className="back-global">← Back</Link>

      <div className="details-layout">
        {/* LEFT */}
        <div className="left">
          <h1>{pokemon.name}</h1>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>

        {/* RIGHT */}
        <div className="right">
          <div className="info-block">
            <h3>General</h3>
            <p><b>ID:</b> #{pokemon.id}</p>
            <p><b>Height:</b> {pokemon.height}</p>
            <p><b>Weight:</b> {pokemon.weight}</p>
            <p><b>Base exp:</b> {pokemon.base_experience}</p>
          </div>

          <div className="info-block">
            <h3>Types</h3>
            <p>{pokemon.types.map(t => t.type.name).join(', ')}</p>
          </div>

          <div className="info-block">
            <h3>Abilities</h3>
            <p>
              {pokemon.abilities
                .map(a => a.ability.name)
                .join(', ')}
            </p>
          </div>

          <div className="info-block">
            <h3>Stats</h3>
            {pokemon.stats.map(stat => (
              <div key={stat.stat.name} className="stat">
                <span>{stat.stat.name}</span>
                <div className="bar">
                  <div
                    className="fill"
                    style={{
                      width: `${Math.min(
                        stat.base_stat,
                        100
                      )}%`,
                    }}
                  />
                </div>
                <span>{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
