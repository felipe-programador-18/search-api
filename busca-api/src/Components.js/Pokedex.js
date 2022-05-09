import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon'


//here i create map to adding below the other and also verify loading with all code
const Pokedex = (props) => {
    const {pokemons, loading, page, totalPages} = props;
    //console.log('pokemons here', pokemons)
     
    // create two functions to paginations!!
     const OnLeftClick = () => {
        console.log('volta')
      }
      
      const OnRightClick = () => {
        console.log('avanca')
      }
      
    return( <div>
        <div className='pokedex-header'>
        <h1>Pokedex</h1>
         <Pagination 
         page ={page+1}
         totalPages={totalPages} 
         onLeftClick={OnLeftClick}
         OnRightClick={OnRightClick} />
        </div>
        {loading ?  (<div>Carregando, fera aqui....</div>
        ) : 
        ( <div className='pokedex-grid' >
          {pokemons && pokemons.map((pokemon, index) => {
              return(
                <Pokemon key={index} pokemon={pokemon} />
              );
          })}
        </div> )
        }
    </div>
    )
}

export default Pokedex