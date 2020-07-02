import React, { useEffect, useState } from 'react';
import './styles.css';
import Card from '../Card';
import { apiType } from '../../services/api';

export default function CardsContainer({ addToCart, searchTerm }) {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemon() {
      const response = await apiType.get('/pokemon/?limit=953');
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setPokemonArray(response.data.results);
      setLoading(false);
    }
    loadPokemon();

  }, [])

  const next = async () => {
    setLoading(true);
    let data = await apiType.get(nextUrl);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  function addItem(currentPokemon) {
    addToCart(currentPokemon)
  }
  console.log(pokemonArray)
  
  return (
    <>
    
      <>
      <div className="btn">
        <button onClick={prevUrl}>Prev</button>
        <button onClick={nextUrl}>Next</button>
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
