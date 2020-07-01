import React, { useEffect, useState } from 'react';
import './styles.css';
import Card from '../Card';
import api from '../../services/api';

export default function CardsContainer({ addToCart, searchTerm }) {
  const [pokemonArray, setPokemonArray] = useState([]);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function loadPokemon() {
      const response = await api(initialURL);
      setPokemonArray(response.results);
    }
    loadPokemon();

  }, [])
  console.log(pokemonArray)

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
