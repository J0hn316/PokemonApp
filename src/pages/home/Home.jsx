import { Link } from 'react-router-dom';
import './home.css';
//import CustomBG from '../../components/CustomBackGround/CustomBG';

export default function HomePage() {
  return (
    <div className="HomePage">
      {/* <CustomBG /> */}
      <div className="PokeApp">
        <h1>Pokémon App</h1>
        <div className="screen">
          <button>play</button>
        </div>
        <div className="home-button-container">
          <div className="links">
            <Link to="/about">About</Link>
            <Link to="/all">See All Pokemon</Link>
            <Link to="/search">Search</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
