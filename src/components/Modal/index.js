import React from 'react';
import './styles.css';
import cart_img from './../../assets/cart-empty.png';
import poke_thanks from './../../assets/thanks-poke.webp'
export default function Modal(isClear){
  if(isClear.show){
      return(
        <div className='modal'>
          <img src={cart_img} />
        </div>  
      );
  }else {
    return(
      <div className='modal'>
        <img src={poke_thanks} />
        <h1 className='poke_thanks'>Obrigado pela compra! </h1>
      </div>  
    );
  }
  
}