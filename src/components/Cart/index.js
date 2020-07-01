import React, { useState, useEffect } from 'react';
import './styles.css';

export default function Cart({ cartItems, totalPrice, endShop }) {
  const [currentCartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems([...cartItems]);
  }, [cartItems])

  return (
    <div className='cart'>
      <h1>Carrinho</h1>
      {
        currentCartItems.map(item => {
          return (
            <div className='item' key={item.id}>
              <img src={item.sprites.front_default} alt={item.name} />
              <p className='name'>{item.name}</p>
              <p className='price'>R$ {item.order}</p>
            </div>
          );
        })}

      <div className='bottomContent'>

        <h2>Total : R$ {totalPrice}</h2>
        <button onClick={() => {
          endShop()
        }}
        >Finalizar compra</button>
      </div>

    </div>
  );
};