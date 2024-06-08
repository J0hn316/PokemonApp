import CustomLink from '../CustomLink/CustomLink';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <h3>Pokémon App</h3>
        <CustomLink href="/" name="Home" />
        <CustomLink href="/about" name="About" />
        <CustomLink href="/all" name="All Pokemon" />
        <CustomLink href="/search" name="Search" />
      </ul>
    </nav>
  );
}
