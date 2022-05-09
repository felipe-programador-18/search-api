import React,{useEffect,useState} from 'react'
import { GetPokemo, GetPokemonData } from './api'
import './App.css'
import NavBar from './Components.js/Navbar'
import  Pokedex  from './Components.js/Pokedex'
import Searchbar from './Components.js/Searchbar'




function App() {
  // one flag date and anoter pokemon!!
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(0)
  const [totalPages, setTotalPage] = useState(0)
  const [pokemons, setpokemon] = useState([])
  const itemToPages = 25

  const fectchingPokec= async () => {
     try {
      setloading(true)
      const data = await GetPokemo(itemToPages, itemToPages * page);
      const promises = data.results.map(async (pokemon) =>{
        return  await GetPokemonData(pokemon.url)
      })
      
      //rememeber promisse all always receive list of promises!!
      const results = await Promise.all(promises)
      setpokemon(results)
      setloading(false)
      //i adding count because count api!!!
      setTotalPage(Math.ceil(data.count / itemToPages))
     } catch (error) {
       console.log('fetchpoke error', error)
     }  
  }
  useEffect(() => {
     fectchingPokec()
   }, [page])

  
return (
    <div>
      <NavBar/>
      <Searchbar />
      <Pokedex 
       pokemons={pokemons}
       loading={loading}
       page ={page} 
       setpage ={setpage}
       totalPages={totalPages} />
     
    </div>
  );
}

export default App;
