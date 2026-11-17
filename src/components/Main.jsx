import { useEffect, useState } from 'react'
import PokemonApplication from './PokemonApplication'

export default function Main () {
    const [show, setShow] = useState(false)
    const [pokemon, setPokemon] = useState(null)
    
    useEffect(
    () => {
      async function getData() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const json = await res.json();
        setPokemon(json)
      }
    getData()}, [show] )
    return ( 
        <main>
        <button className='start-knapp' onClick={() => setShow(!show)}>{show ? "Close" : "Start"} Pokemon App</button>

        {show && <PokemonApplication pokemon={pokemon} />}
        </main>
    )
}