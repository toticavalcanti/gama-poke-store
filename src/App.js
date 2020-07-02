import React, { useState } from 'react';
import ReactNotification from 'react-notifications-component';

import NavBar from './components/NavBar';
import CardsContainer from './components/CardsContainer';
import Cart from './components/Cart';
import Modal from './components/Modal';

import 'react-notifications-component/dist/theme.css';
import './global.css';
import './responsive.css';


function App() {
  const [isCartEnabled, setIsCardEnabled] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModalState, setShowModalState] = useState(false);

  function endShop() {
    setCartItems([]);
    setPriceTotal(0);

    setShowModalState(true);
    setTimeout(() => {
      setShowModalState(false)
    }, 2000);
  }
  function renderCart(cartItems, priceTotal) {
    if (isCartEnabled)
      return (<Cart cartItems={cartItems} totalPrice={priceTotal} endShop={endShop} />);
  }
  //(currentPokemon.weight + currentPokemon.height + currentPokemon.base_experience) / 3).toFixed(2)
  function addPokemonToCart(currentPokemon) {
    setCartItems([...cartItems, currentPokemon]);
    setPriceTotal((parseFloat(priceTotal) + parseFloat(((currentPokemon.weight + currentPokemon.height + currentPokemon.base_experience) / 3))).toFixed(2));
  }
  function loadCards() {
    return <CardsContainer addToCart={addPokemonToCart} searchTerm={searchTerm} />
  }
  function showModal() {
    if (showModalState === true)
      return (<Modal />);
  }

  return (
    <>
      <ReactNotification />
      <NavBar onCartClick={() => {
        if (isCartEnabled === true)
          setIsCardEnabled(false)
        else
          setIsCardEnabled(true)
      }}
        onSearchClick={(searchTerm) => { setSearchTerm(searchTerm) }} />

      <div className='content'>
        {loadCards()}
        {renderCart(cartItems, priceTotal)}
      </div>
      {showModal()}
    </>
  );
}

export default App;
