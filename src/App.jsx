import { useEffect, useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'

function App() {
const [show, setShow] = useState(false)
const [pokemon, setPokemon] = useState(null)
useEffect(
  () => {
    async function getData () {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const json = await res.json();
      setPokemon(json)
    }
    getData()
  },[show]
)



  return (
    <>
    <header>
    <h1>Pokemon App</h1>

    </header>
    <main>
      
      <button className='start-knapp' onClick={() => setShow(!show)}>Start Pokemon App</button>

    {show && <PokemonApplication pokemon={pokemon}/>}
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default App
