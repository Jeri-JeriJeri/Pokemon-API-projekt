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
                <h2>Choose Your Pokemon!</h2>

                <select onChange={(e) => setSelectedPokemon(e.target.value)}>

                    <option value="">Choose</option>
                    {pokemon.results.map((item, i) => {
                        const storBokstav = item.name.charAt(0).toUpperCase() + item.name.slice(1); 
                     return <option key={i} value={item.url}> {storBokstav} </option>
                    })}
                </select>
                <button onClick={getUrl}>Show info:</button>
            </div>

            {pokemonData && <Pokemon pokemon={pokemonData} /> }
            
        </>


    )
}

export default PokemonApplication