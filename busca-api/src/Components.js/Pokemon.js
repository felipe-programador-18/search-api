import React, {useContext} from 'react'
import FavoriteContext from '../Contexts/Favorites'
// this way i am get all pokemon picture making method props
const Pokemon = (props) => {
  const {favoritePokemons, updatefavoritePokemons} = useContext(FavoriteContext)
  
  const {pokemon} = props
  const onHeartClick = () =>{
     //here inside i am passed it updatefavoritepokemon
     updatefavoritePokemons(pokemon.name)
  }
  const heart = favoritePokemons.includes(pokemon.name) ? "💛" : "🖤"
  return(
  <div className='pokemon-card'>
       <div className='pokemon-image-container'>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} className='pokemon-img' />
       </div>
       
       <div className='card-body'>
          <div className='card-top'>
              <h3> {pokemon.name}</h3>
              <div>#{pokemon.id}</div>
          </div>  
            
          <div className='card-button'>
            <div className='pokemon-type'>
              {pokemon.types.map((type, index) => 
              { return <div key={index}  className='pokemon-type-text' >
                   {type.type.name}
              </div>
            
                  })}
             </div>   
              
              <button className='pokemon-heart-btn' onClick={onHeartClick}> {heart} </button>
           </div>
       </div>
  </div>)
}

export default Pokemon