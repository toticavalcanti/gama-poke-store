import React, { useEffect, useState } from 'react';
import './styles.css';
import { store } from 'react-notifications-component';
import api from '../../services/api';
const unknownSprite = 'https://images.vexels.com/media/users/3/155301/isolated/preview/6a91c0d6c8ba37a9fd115e1776300319-pergunta-do-doodle-do-ponto-de-interroga----o-3d-by-vexels.png';

export default function Card({ pokemon, addToCart }) {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [pokemonSprite, setPokemonSprite] = useState('');

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get(pokemon.url);
      setCurrentPokemon(response.data);

      if (response.data.sprites.front_default != null)
        setPokemonSprite(response.data.sprites.front_default);
      else
        setPokemonSprite(unknownSprite);
    }
    loadPokemon();
  }, [pokemon])

  return (
    <div className='card'>

      <img src={pokemonSprite} alt={currentPokemon.name} />
      <p className='name'>{currentPokemon.name}</p>
      <p />
      <p className='price'>R$ {currentPokemon.order} </p>
      
      <button onClick={() => {
        store.addNotification({
          title: 'Adicionado ao carrinho',
          insert: 'bottom',
          type: 'info',
          message: currentPokemon.name,
          container: 'bottom-right',
          dismiss: {
            duration: 1500,
            onScreen: true
          }
        });
        return addToCart(currentPokemon)
      }
      }
      >Adicionar pokemon ao carrinho</button>
    </div>
  );
}