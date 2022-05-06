import React from 'react'
import Pokemon from './Pokemon';
//here i create map to adding below the other and also verify loading with all code

const Pokedex = (props) => {
    const {pokemons, loading} = props;
    console.log('pokemons here', pokemons)
    return( <div>
        <div className='pokedex-header'>
        <h1>Pokedex</h1>
          Paginação:
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