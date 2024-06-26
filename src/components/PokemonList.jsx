// Create dynamic links
// First, let’s turn each pokemon name into a clickable link within the <PokemonList />.
// Import the Link component at the top of PokemonList.jsx
import { Link } from "react-router-dom";
const PokemonList = (props) => {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {/* Next, wrap the text content of the <li> with a <Link> */}
        {props.pokemon.map((currentPokemon) => (
          <li key={currentPokemon.name}>
            <Link to={`/pokemon/${currentPokemon._id}`}>
              {currentPokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;
