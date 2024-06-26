import { useState } from "react";
import PokemonList from "./components/PokemonList";
import NavBar from "./components/NavBar";
import PokemonDetails from "./components/PokemonDetails";
import PokemonForm from "./components/PokemonForm";
import { Route, Routes } from "react-router-dom";

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];
function App() {
  const [pokemon, setPokemon] = useState(initialState);

  // Now we can make our form component fully-functional. To do so, we’ll need a new function in src/App.jsx that adds new pokemon data to pokemon array state.
  // Notice the _id property being added to newPokemonData before it is included in pokemon state. Here we are giving the new pokemon object a unique identifier based on the current length of pokemon state. This is practical because we aren’t using a database at the moment, and we wouldn’t expect our users to enter a unique id value when filling out the form.


  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        {/* To set up a default route (home page), we could create a new Homepage.jsx component, but we can also define some JSX to render directly in the element prop. Let’s go with the second option to better demonstrate some of the flexibility you have in building routes. */}
        <Route path="/" element={<h2>Home Page</h2>} />

        {/* Currently, our navigation bar has a link directing users to '/pokemon'. Let’s define a <Route> so that the <PokemonList> component is rendered at this path. */}
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        {/* With the above <Route> component, we have defined a path as /pokemon and the element as the component <PokemonList /> to render when that path is accessed. */}

        {/* // <PokemonList pokemon={ pokemon } /> this was original before adding route link above*/}
        {/* The pokemon={pokemon} part of the snippet is an example of how props (short for properties) are passed to React components. Props are a way of passing data from parent to child components, making it possible to dynamically render UI based on the data. Here, pokemon is the name of the prop that PokemonList expects, and the value being passed to it is also pokemon, which suggests that there is a variable or state named pokemon in the scope of the parent component where this snippet is used. This variable likely holds data related to a list or collection of Pokémon, which PokemonList will use to render a list of Pokémon in the UI.
         */}

        <Route path="/pokemon/new" element={<PokemonForm addPokemon={addPokemon} />} />

        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        {/* Take a moment to review the syntax of our new dynamic <Route>.
In React Router, route parameters are defined in the path using a : symbol. Here, we have defined a pokemonId route parameter. When a user selects a pokemon link, the URL changes to include that pokemon’s _id_, which is captured by the pokemonId parameter.
In short, this new <Route> tells React Router to render <PokemonDetails /> for URLs following the pattern /pokemon/1, /pokemon/2, /pokemon/3, etc.
💡 Notice how we are we passing the pokemon array to <PokemonDetails />. In the next section, we’ll use this array combined with our pokemonId route parameter to locate and render a specific pokemon in the array. */}

        {/* // NEW, CATCH-ALL DEFAULT ROUTE */}
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
}

export default App;
