import React, { useEffect, useState } from 'react';
import './styles.css';
import Card from '../Card';
import { apiType } from '../../services/api';

export default function CardsContainer({ addToCart, searchTerm }) {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');

  useEffect(() => {
    async function loadPokemon() {
      const response = await apiType.get('/pokemon/');
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setPokemonArray(response.data.results);
    }
    loadPokemon();
  }, [])

  const next = async () => {
    let data = await apiType.get(nextUrl);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }

  function addItem(currentPokemon) {
    addToCart(currentPokemon)
  }
  console.log(pokemonArray)
  
  return (
    <>
      <>
      <div class="container-buttons">
        <div class="vertical-center">
          <div className="btn">
            <button onClick={prevUrl}>Prev</button>
            <button onClick={nextUrl}>Next</button>
          </div>
        </div>
      </div>
      </>
      <div className='container'>
        {pokemonArray
          .filter(pokemon => pokemon.name.includes(searchTerm))
          .map(pokemon => {
            return <Card pokemon={pokemon} addToCart={addItem} key={pokemon.name} />
          })}
      </div>
    </> 
  );

};
