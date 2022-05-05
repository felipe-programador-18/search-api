import React, {useState} from 'react'


const Searchbar = () => {
    const [search, setsearch]= useState('dito')
    
    const OnchangeHandling = (e) => {
        setsearch(e.target.value)
    }
    const OnbuttonClikHandlig = () => {
        console.log('name of poke', search)
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