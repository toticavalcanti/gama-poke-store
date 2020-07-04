import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/gama-poke-store01.png'
import { MdAccountBox, MdSearch } from 'react-icons/md';
import { Container, Row, Col } from 'react-bootstrap';

export default function NavBar({ onSearchClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
  <div className='navBar'>

    <a href='https://pokeapi.co/' target='_blank' rel='noopener noreferrer'>
      <img className='logo' src={logoImg} alt='Pokémon' />
    </a>
    <div className='searchBar'>

      <input placeholder='Pesquise pelo nome do pokemon'
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

    <a href='https://github.com/toticavalcanti' target='_blank' rel='noopener noreferrer'>
      <MdAccountBox 
        className='profileIcon'
        color='#FFF'
        size={70} 
      />
    </a>

  </div>
  );
}