
function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: '100%',
        padding: '12px',
        fontSize: '18px',
        marginBottom: '20px'
      }}
    />
  )
}


export default SearchBar
