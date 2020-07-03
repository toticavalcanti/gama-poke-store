import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md'
import capitalizeLetter from './../../utils/capitalize'
import './styles.css';
import {
  Card, Container, Row, Col, CardGroup, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function Cart({ onCartClick, cartItems, totalPrice, endShop }) {
  const [currentCartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems([...cartItems]);
  }, [cartItems])

  return (
    <Container fluid="md">
      <Col>
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
                  <Container className="line">
                    <Row className='cartDetail'>
                      <Col>
                        <img src={item.sprites.front_default} alt={item.name} />
                      </Col>
                      <Col>
                        <p className='name'>{capitalizeLetter(item.name)}</p>
                      </Col>
                      <Col>
                        <p className='price'>R$ {((item.weight + item.height + item.base_experience) / 3).toFixed(2)}</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              
            );
          })}

        <div className='bottomContent'>

        <h2>Total : R$ {totalPrice.toFixed(2)}</h2>
        <Button onClick={() => {
          endShop()
        }}
        >Finalizar compra</Button>
      </div>
      

      </div></Col>
    </Container>
  );
};