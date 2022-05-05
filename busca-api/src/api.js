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