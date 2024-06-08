import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPokemonByName } from '../../api/pokeApi';
import Details from '../../components/Details/Details';
import Graph from '../../components/Graph/Graph';
import './displaypage.css';

export default function DisplayPage() {
  const [pokemon, setPokemon] = useState();
  const [pokemonStats, setPokemonStats] = useState();
  const [pokemonDetails, setPokemonDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await getPokemonByName(id);
        updatePokemon(res);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };
    fetchPokemon();
  }, [id]);

  function updatePokemon(pokemon) {
    setPokemon(pokemon);
    const stats = pokemon.stats.map((stat) => {
      return { name: stat.stat.name, val: stat.base_stat };
    });
    setPokemonStats(stats);
    const details = {
      name: pokemon.name,
      type: pokemon.types,
      games: pokemon.game_indices,
      moves: pokemon.moves,
    };
    setPokemonDetails(details);
  }

  return (
    <div className="DisplayPage">
      <div className="display-image-container">
        {pokemon ? (
          <img src={`${pokemon.sprites.other.showdown.front_default}`} />
        ) : (
          <div></div>
        )}
        {pokemonStats ? <Graph details={pokemonStats} /> : <div></div>}
      </div>
      <div className="display-stat-container">
        {pokemonDetails ? <Details details={pokemonDetails} /> : <div></div>}
      </div>
    </div>
  );
}
