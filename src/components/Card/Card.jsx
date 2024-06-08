import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import './card.css';

export default function Card(pokemon) {
  const linkRef = useRef(null);
  const audio = new Audio(pokemon.details.cries.latest);

  useEffect(() => {
    const handleMouseEnter = () => {
      audio.play();
    };
    const linkElement = linkRef.current;
    if (linkElement) {
      linkElement.addEventListener('mouseenter', handleMouseEnter);
    }
    return () => {
      if (linkElement) {
        linkElement.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [audio]);

  return (
    <Link
      to={`/display/${pokemon.details.name}`}
      className="Card"
      ref={linkRef}
    >
      <img
        className="background-image"
        src={pokemon.details.sprites.other.home.front_default}
        alt={pokemon}
      />
      <div>
        <img
          className="title-image"
          src={pokemon.details.sprites.front_default}
          alt={pokemon}
        />
      </div>
      <div>
        <h2>{pokemon.details.name}</h2>
        <br />
        <span>
          <p>HP : {pokemon.details.stats[0].base_stat}</p>
          <p>Attack : {pokemon.details.stats[1].base_stat}</p>
          <p>Defense : {pokemon.details.stats[2].base_stat}</p>
          <p>Speed : {pokemon.details.stats[5].base_stat}</p>
        </span>
      </div>
    </Link>
  );
}
