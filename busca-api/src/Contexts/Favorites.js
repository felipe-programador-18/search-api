import React from 'react'

//this case i am create all context, but give two parameter!!
// lot interesting!
const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updatefavoritePokemons : (id) =>null
})
export const FavoritePro = FavoriteContext.Provider
export default FavoriteContext



