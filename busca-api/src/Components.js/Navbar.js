import React from 'react'

const NavBar = () => {
  //is very interesting!!
  const Imglink = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
          <nav>
              <div>
                  <img className='navbar-img'
                  alt='pokiapi-log'
                  src={Imglink}
                  />
              </div>
          </nav>
    
  )
}

export default NavBar