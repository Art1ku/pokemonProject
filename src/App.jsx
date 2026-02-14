import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'

function App() {
  const [search, setSearch] = useState('')

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar search={search} setSearch={setSearch} />
              <PokemonList search={search} />
            </>
          }
        />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App
