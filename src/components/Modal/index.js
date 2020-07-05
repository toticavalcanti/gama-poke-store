import React from 'react';
import './styles.css';

export default function Modal(isClear){
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