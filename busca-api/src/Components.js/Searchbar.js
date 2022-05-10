import React, {useState} from 'react'

const Searchbar = (props) => {
    const [search, setSearch]= useState("dito")
    //this name of state he used to caught date of api!!
    const {onSearch} = props;
  
    //const [pokemon, setpokemon]= useState()
    const OnchangeHandling = (e) => {
        setSearch(e.target.value)
        if(e.target.value.lenght === 0){
         onSearch(undefined)
        }
    }
    const OnbuttonClikHandlig = () => {
      onSearch(search)
    }
    
    return(
        <div className='searchbar-container'>
            <div className='searchbar'>
              <input placeholder='Buscar Pokemon' onChange={OnchangeHandling} />
            </div>
           <div className='search-btn'>
             <button onClick={OnbuttonClikHandlig}>Buscar!</button>
            </div>
        </div>
           
    )
}

export default Searchbar