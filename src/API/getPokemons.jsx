const Base_URL = 'https://pokeapi.co/api/v2';

const getPokemons = (number) => fetch(`${Base_URL}/pokemon/${number}/`).then(res => res.json())

export { getPokemons };