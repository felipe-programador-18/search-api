import React, {useState} from 'react'
import { searchPokemo } from '../api'

const Searchbar = () => {
    const [search, setsearch]= useState('dito')
    const [pokemon, setpokemon]= useState()
    const OnchangeHandling = (e) => {
        setsearch(e.target.value)
    }
    const OnbuttonClikHandlig = () => {
      onSearchHandling(search)
    }
    const onSearchHandling = async (pokemon) =>{
        const result = await (searchPokemo(pokemon))
        setpokemon(result)
      }

    return(
        <div className='searchbar-container'>
            <div className='searchbar'>
              <input placeholder='Buscar Pokemon' onChange={OnchangeHandling} />
            </div>
           <div className='search-btn'>
             <button onClick={OnbuttonClikHandlig}>Buscar!</button>
           </div>
           {pokemon ? (
               <div>
                   <div> Name:{pokemon.name} </div>
                   <div> Peso: {pokemon.height} </div>
                   <img src={pokemon.sprites.front_default} alt={pokemon.name} />
               </div>
           ) : null}
        </div>
    )
}

export default Searchbar