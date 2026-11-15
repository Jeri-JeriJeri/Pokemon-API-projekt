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
      
      <button className='start-knapp' onClick={() => setShow(!show)}>{show ? "Close" : "Start"} Pokemon App</button>

    {show && <PokemonApplication pokemon={pokemon}/>}
      </main>
      <footer>
        <p>A simple Pokémon explorer where you can choose your favorite Pokémon and discover its details, including its name, height, weight, type, and an animated GIF. Gotta catch them all!</p>
        <ul className='kontakt'>
          <li>Email: <a href="mailto:bojan.ivanovski@nackademin.se">bojan.ivanovski@nackademin.se</a></li>
          <li>Linked In: <a href="https://www.linkedin.com/in/bojan-ivanovski-30886a2ab/">Bojan Ivanovski</a></li>
        </ul>
        <p>&copy; Bojan 2026</p>
      </footer>
    </>
  )
}

export default App
