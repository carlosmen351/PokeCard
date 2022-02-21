import React, { useState } from 'react';
import { useEffect } from 'react';
import { getPokemons } from '../API/getPokemons.jsx';


function Container() {

  const [pokemon, setPokemon] = useState('')
  let [quantity, setQuantity] = useState(1)

  const fetchPokemon = (number) => {
    getPokemons(number).then(data => {
      setPokemon(data)
    })
  }

  useEffect(() => {
    fetchPokemon(quantity)
  }, [quantity])

  if (pokemon.sprites) {
    return (
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt='imagen' />
        <div>
          <button
            type='button'
            onClick={() => {
              setQuantity(quantity -= 1)
              fetchPokemon(quantity)
              console.log(quantity)
            }}
            disabled={quantity === 1}
          >
            Anterior
          </button>
          <button
            type='button'
            onClick={() => {
              setQuantity(quantity += 1)
              fetchPokemon(quantity)
              console.log(quantity)
            }
            }
            disabled={quantity === 20}
          >
            Siguiente
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{pokemon.name}</h2>
        <img src='' alt='imagen' />
        <div>
          <button
            type='button'
            onClick={() => {
              setQuantity(quantity - 1)
              fetchPokemon(quantity)
            }}
            disabled={quantity <= 1}
          >
            Anterior
          </button>
          <button
            type='button'
            onClick={() => {
              setQuantity(quantity + 1)
              fetchPokemon(quantity)
            }
            }
            disabled={quantity >= 20}
          >
            Siguiente
          </button>
        </div>
      </div>
    );
  }
}

export default Container;