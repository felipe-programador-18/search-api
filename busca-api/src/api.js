// here i create one function to receive async to manager loading all dates!!!
export const searchPokemo = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
      console.log('error here',error)
    }
}
//this functions caught all pokemon and search with limit about search!!
export const GetPokemo = async (limit= 50 ,offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
      console.log('error here',error)
    }
}

// this another functions went created to receive url of all data
//practice about that!!
export const GetPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
      console.log('error here',error)
    }
}