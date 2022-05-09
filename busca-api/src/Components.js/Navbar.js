import React, {useContext} from 'react'
import FavoriteContext from '../Contexts/Favorites'

const NavBar = () => {
  //is very interesting!!
  const {favoritePokemons} = useContext(FavoriteContext)

  const Imglink = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
          <nav>
              <div>
                  <img className='navbar-img'
                  alt='pokiapi-log'
                  src={Imglink}
                  />
              </div>
              <div> {favoritePokemons.length} ❤ </div>
          </nav>
    
  )
}

export default NavBar