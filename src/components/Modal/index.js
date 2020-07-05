import React, { useState } from 'react';
import './styles.css';

export default function Modal(isClear){
  console.log(isClear.show)
  if(isClear.show){
      return(
        <div className='modal'>
          <h1>Carrinho limpo! ;)</h1>
        </div>  
      );
  }else {
    return(
      <div className='modal'>
        <h1>Obrigado pela compra! :)</h1>
      </div>  
    );
  }
  
}