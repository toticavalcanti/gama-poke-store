import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/poke02.png'
import { MdAccountBox, MdShoppingCart, MdSearch } from 'react-icons/md';

export default function TopBar({ onCartClick, onSearchClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='topBar'>

      <a href='https://pokeapi.co/' target='_blank' rel='noopener noreferrer'>
        <img src={logoImg} alt='Pokémon' />
      </a>
      <div className='searchBar'>

        <input placeholder='Pesquise por nome'
          type='text'
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter')
              return onSearchClick(searchTerm);
          }} />

        <MdSearch className='searchIcon'
          color='#6495ed'
          size={26}
          onClick={() => { return onSearchClick(searchTerm) }} />

      </div>

      <MdShoppingCart className='cartIcon'
        color='#FFF'
        size={55}
        onClick={onCartClick} />
      <a href='https://github.com/toticavalcanti' target='_blank' rel='noopener noreferrer'>
        <MdAccountBox className='profileIcon'
          color='#FFF'
          size={55} />
      </a>

    </div>
  );
}