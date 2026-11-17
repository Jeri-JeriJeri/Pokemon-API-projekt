import { useState } from "react"
import Pokemon from "./Pokemon";

function PokemonApplication({ pokemon }) {
    const [selectedPokemon, setSelectedPokemon] = useState("")
    const [pokemonData, setPokemonData] = useState(null)

    const getUrl = async () => {
        const res = await fetch(selectedPokemon);
        const json = await res.json();
        setPokemonData(json)
    }


    return (
        <>
            <div className="pokemon-application">
                <h2>Välj din Pokemon</h2>

                <select onChange={(e) => setSelectedPokemon(e.target.value)}>

                    <option value="">Välj din pokemon</option>
                    {pokemon.results.map((item, i) => (
                        <option key={i} value={item.url}>
                            {/* Kan inte skapa variabel eller funktion för att få stor bokstav som kommer funka i .map scope */}
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}</option>
                    ))}
                </select>
                <button onClick={getUrl}>Show info:</button>
            </div>

            {pokemonData && <Pokemon pokemon={pokemonData} /> }
        </>


    )
}

export default PokemonApplication