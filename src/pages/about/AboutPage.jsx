import './aboutpage.css';

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="about-container">
        <h1>About My Pokémon App</h1>

        <p>
          Welcome to the ultimate Pokémon search app! Here are some of the
          exciting features:
        </p>
        <ul>
          <li>
            <strong>Search by Name or Type:</strong> You can easily search for
            Pokémon by their name or type.
          </li>
          <li>
            <strong>Interactive Sound Effects:</strong> When you search by name,
            the specific Pokemon sound will play when you hover the mouse over
            it.
          </li>
          <li>
            <strong>Detailed Pokémon Pages:</strong> Select a Pokémon to go to
            its dedicated page, where you will see an animated GIF of the
            Pokémon along with its moves, stats, and the Pokémon games it is in.
          </li>
          <li>
            <strong>Feature playing to add:</strong>
            <li>1. A view all pokemon page.</li>
            <li>2. Add the ability to view app on small devices.</li>
          </li>
          <li>
            <strong>Features that needs to fix:</strong>
            <li>
              1. When searching by <strong>TYPE</strong> for pokemon.The sound
              will not play when you hover over a specific pokemon.
            </li>
            <li>
              2.How Pokemon look when select a pokemon on the pokemon specific
              page.
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}
