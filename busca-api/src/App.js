import React,{useEffect,useState} from 'react'
import { GetPokemo, GetPokemonData } from './api'
import './App.css'
import NavBar from './Components.js/Navbar'
import  Pokedex  from './Components.js/Pokedex'
import Searchbar from './Components.js/Searchbar'
import { FavoriteProvider } from './Contexts/Favorites'

const favoritesKey = 'favorites'



function App() {
  // one flag date and anoter pokemon!!
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(0)
  const [totalPages, setTotalPage] = useState(0)
  const [pokemons, setpokemon] = useState([])
  // this favorites it working context!!!
  const [favorites, setfavorites] = useState([])
  
  //make count of page i want!!
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

  //create funtion to make local storage!!!
  const loadingFavorites = () => {
   const savePokemon= JSON.parse(window.localStorage.getItem(favoritesKey)) || []
   setfavorites(savePokemon)
  }
  useEffect(() => {
    loadingFavorites()
   }, [])
  

  useEffect(() => {
     fectchingPokec()
   }, [page])

 const updateFavoritePokemons = (name) => {
  //create variable to caught all data with spring operator!!! 
  const updateFavorited = [...favorites]
  const favoritesIndex = favorites.indexOf(name)
  if(favoritesIndex >= 0){
    updateFavorited.splice(favoritesIndex,1) 
  }else{
    updateFavorited.push(name)
  }
  window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorited))
  setfavorites(updateFavorited)
 }  
 

return (
  <FavoriteProvider value={{favoritePokemons: favorites, updatefavoritePokemons:updateFavoritePokemons}} >
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
  
  </FavoriteProvider>);
}

export default App;
