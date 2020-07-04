import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md'
import capitalizeLetter from './../../utils/capitalize'
import './styles.css';
import {
  Card, Container, ButtonGroup, Row, Button
} from 'react-bootstrap';

export default function Cart({ onCartClick, cartItems, totalPrice, endShop, clearCart }) {
  const [currentCartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems([...cartItems]);
  }, [cartItems])

  return (
      <Container fluid className='container-right-side'>
      
        <MdShoppingCart className='cartIcon'
          color='#FFF'
          size={60}
          onClick={onCartClick} 
        />
        {
          currentCartItems.map(item => {
            return (
              <Card className='side-card-poke'>     
              <img src={item.sprites.front_default} alt={item.name} />
              <Container className='item' key={item.id}>
                <p>{capitalizeLetter(item.name)}</p>
                <p>R$ {((item.weight + item.height + item.base_experience) / 3).toFixed(2)}</p>
              </Container>
              </Card>
            );
          })}
        <div className='total'>
          <h2>Total : R$ {totalPrice.toFixed(2)}</h2>
        </div>
        <Container fluid>
          <Row>
          <ButtonGroup className='btn-group'>
            <Button variant="secondary" className='button-end'onClick={() => {
              endShop()
            }}
            >Finalizar Compra
            </Button>
              
            <Button variant="secondary" className='button-clear'onClick={() => {
              clearCart()
            }}
            >Esvaziar Carrinho
            </Button>
          </ButtonGroup>
          </Row>
        </Container>
      </Container>
    
  );
};