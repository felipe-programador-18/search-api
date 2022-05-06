import React from 'react'
// this way i am get all pokemon picture making method props
const Pokemon = (props) => {
  const {pokemon} = props
  return(<div>
    {pokemon.name}
  </div>)
}

export default Pokemon