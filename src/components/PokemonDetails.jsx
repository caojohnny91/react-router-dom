import { useParams } from "react-router-dom";

const PokemonDetails = (props) => {
  const { pokemonId } = useParams();

  //   Our last task is to find() a specific pokemon in the props.pokemon array using the extracted pokemonId.
  // Update the main function of PokemonDetails.jsx with the following:
  const singlePokemon = props.pokemon.find(
    (poke) => poke._id === Number(pokemonId)
  );
  //   Note the use of the Number function to ensure the route parameter is typecast from its original String data type to the Number type we expect an _id property to have. Route parameters will always start with a String datatype, so be careful when making comparisons with them!
  console.log("pokemon Object:", singlePokemon);
  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
