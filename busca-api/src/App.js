import React,{useEffect,useState} from 'react'
import './App.css'
import NavBar from './Components.js/Navbar'
import  Pokedex  from './Components.js/Pokedex';
import Searchbar from './Components.js/Searchbar'




function App() {
  const [loading, setloading] = useState(false)
  
  const fectchingPokec= async () => {
      setloading(true)
  }
   
  useEffect(() => {
     console.log('carregou!!!')
     fectchingPokec()
   }, [])

  
return (
    <div>
      <NavBar/>
      <Searchbar />
      <Pokedex/>
     
    </div>
  );
}

export default App;
