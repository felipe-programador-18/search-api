import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon'


//here i create map to adding below the other and also verify loading with all code
const Pokedex = (props) => {
    const {pokemons, loading, page, setpage, totalPages} = props;
    //console.log('pokemons here', pokemons)
     
    // create two functions to paginations!!
     const OnLeftHandlingClick = () => {
        if(page > 0){
          //this verify to stay page!!
          setpage(page -1)
        }
      }
      
      const OnRightHandlingClick = () => {
        if(page+1 !== totalPages){
          //aqui se a pagina for diferente do numero total de pagina 46.. sempre passar a pagina 
          setpage(page+1)
        }
      }
      
    return( <div>
        <div className='pokedex-header'>
        <h1>Pokedex</h1>
         <Pagination 
         page ={page+1}
         totalPages={totalPages} 
         OnLeftClick={OnLeftHandlingClick}
         OnRightClick={OnRightHandlingClick} />
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