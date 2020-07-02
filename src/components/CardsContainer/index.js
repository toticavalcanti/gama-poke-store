import React, { useEffect, useState } from 'react';
import './styles.css';
import Card from '../Card';
import { apiType } from '../../services/api';

export default function CardsContainer({ addToCart, searchTerm }) {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const response = await apiType.get('/electric');
      setPokemonArray(response.data.pokemon);
    }
    loadPokemon();

  }, [])

  function addItem(currentPokemon) {
    addToCart(currentPokemon)
  }

  return (<div className='container'>
    {pokemonArray
      .filter(pokemon => pokemon.pokemon.name.includes(searchTerm))
      .map(pokemon => {
        return <Card pokemon={pokemon} addToCart={addItem} key={pokemon.pokemon.name} />
      })}
  </div>);

};
