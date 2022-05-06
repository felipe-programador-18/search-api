import React,{useEffect,useState} from 'react'
import { GetPokemo, GetPokemonData } from './api'
import './App.css'
import NavBar from './Components.js/Navbar'
import  Pokedex  from './Components.js/Pokedex'
import Searchbar from './Components.js/Searchbar'




function App() {
  // one flag date and anoter pokemon!!
  const [loading, setloading] = useState(false)
  const [pokemons, setpokemon] = useState([])

  const fectchingPokec= async () => {
     try {
      setloading(true)
      const data = await GetPokemo();
      const promises = data.results.map(async (pokemon) =>{
        return  await GetPokemonData(pokemon.url)
      })
      
      //rememeber promisse all always receive list of promises!!
      const results =  Promise.all(promises)
      setpokemon(results)
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
