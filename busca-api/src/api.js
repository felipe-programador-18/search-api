// here i create one function to receive async to manager loading all dates!!!
export const searchPokemo = async (pokemon) => {
    try {
        let Url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(Url)
        return await response.json()
    } catch (error) {
      console.log('error here',error)
    }
}
export const GetPokemo = async (limit= 50 ,offset=0) => {
    try {
        let Url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(Url)
        return await response.json()
    } catch (error) {
      console.log('error here',error)
    }
}