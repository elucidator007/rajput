
const params = 'pokemon/ditto'
const set = new Set()

const getapi = async (params) => {
    const response = await fetch(`https://pokeapi.co/api/v2/${params}`)
    const data = await response.json()
    console.log(data)
}

getapi(params)