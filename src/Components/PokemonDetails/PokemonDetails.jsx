import "./PokemonDetails.css";
import { Link } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import Pokemon from "../Pokemon/Pokemon";

function PokemonDetails({ pokemonName }) {
  const [pokemon, pokemonListState] = usePokemon(pokemonName);
  return (
    <>
      <h1 className="pokedex-redirect">
        <Link to="/">Pokedex</Link>
      </h1>
      {pokemon && (
        <div className="pokemon-details-wrapper">
          <div className="pokemon-detail-name">{pokemon.name}</div>
          <div className="pokemon-image">
            <img src={pokemon.image} />
          </div>
          <div className="pokemon-attr">
            <div className="pokemon-height"> height: {pokemon.height}</div>
            <div className="pokemon-weight"> weight: {pokemon.weight}</div>
          </div>
          <div className="pokemon-type">
            <h1>Type:</h1>
            {pokemon.types.map((t) => (
              <span className="type" key={t.type.name}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="similar-pokemons">
        <h2>Similar Pokemons</h2>
        <div className="similar-pokemon-boxes">
          {pokemonListState.pokemonList.length > 0 &&
            pokemonListState.pokemonList.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                key={pokemon.id}
                url={pokemon.image}
                id={pokemon.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
