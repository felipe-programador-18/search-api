import React,{useEffect,useState} from 'react'
import { GetPokemo } from './api';
import './App.css'
import NavBar from './Components.js/Navbar'
import  Pokedex  from './Components.js/Pokedex';
import Searchbar from './Components.js/Searchbar'




function App() {
  // one flag date and anoter pokemon!!
  const [loading, setloading] = useState(false)
  const [pokemons, setpokemon] = useState([])

  const fectchingPokec= async () => {
     try {
      setloading(true)
      const result = await GetPokemo();
      setpokemon(result)
      setloading(false)
     } catch (error) {
       console.log('fetchpoke error', error)
     }  
  }
  useEffect(() => {
     console.log('carregou!!!')
     fectchingPokec()
   }, [])

  
return (
    <div>
      <NavBar/>
      <Searchbar />
      <Pokedex pokemons={pokemons.results} loading={loading} />
     
    </div>
  );
}

export default App;
