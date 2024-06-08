import { useState } from 'react';
import { getPokemonByName, getPokemonByType } from '../../api/pokeApi';
import SearchBox from '../../components/searchboxes/SearchBox';
import CardGrid from '../../components/CardGrid/CardGrid';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';
import './searchpage.css';

export default function SearchPage() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState('');

  function handleSubmit(filter, filterQuery) {
    setPokemon([]);
    setLoading('active');
    setTimeout(() => {
      if (filter == 'name') fetchPokemon([filterQuery]);
      if (filter == 'type') {
        getPokemonByType(filterQuery).then((res) => fetchPokemon(res));
      }
      setLoading('');
    }, 2000);
  }

  async function fetchPokemon(pokemonNames) {
    if (pokemonNames.length === 0) {
      setPokemon('error');
      return;
    }
    try {
      for (const poke of pokemonNames) {
        await getPokemonByName(poke).then((res) =>
          setPokemon((prev) => [...prev, res])
        );
      }
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setPokemon('error');
    }
  }

  return (
    <div className="SearchPage">
      {loading && <LoadingIcon active={loading} />}
      <SearchBox onClick={handleSubmit} />
      {pokemon === 'error' ? <p>Error</p> : <CardGrid pokemon={pokemon} />}
    </div>
  );
}
