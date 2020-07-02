import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md'
import './styles.css';


export default function Cart({ onCartClick, cartItems, totalPrice, endShop }) {
  const [currentCartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems([...cartItems]);
  }, [cartItems])

  return (
    <div className='cart'>
      <MdShoppingCart className='cartIcon'
        color='#FFF'
        size={60}
        onClick={onCartClick} 
      />
      {
        currentCartItems.map(item => {
          return (
            <div className='item' key={item.id}>
              <img src={item.sprites.front_default} alt={item.name} />
              <p className='name'>{item.name}</p>
              <p className='price'>R$ {((item.weight + item.height + item.base_experience) / 3).toFixed(2)}</p>
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