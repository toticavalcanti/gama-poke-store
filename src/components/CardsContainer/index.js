import React, { useEffect, useState } from 'react';
import './styles.css';
<<<<<<< HEAD
import Card from '../Card';
import { apiType } from '../../services/api';

export default function CardsContainer({ addToCart, searchTerm }) {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const response = await apiType.get('/electric');
      setPokemonArray(response.data.pokemon);
=======
import PokeCard from '../Card';
import { apiType } from '../../services/api';
import { Container, Button, ButtonGroup, Row } from 'react-bootstrap';

export default function CardsContainer({ addToCart, searchTerm }) {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');

  useEffect(() => {
    async function loadPokemon() {
      const response = await apiType.get('/pokemon/');
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setPokemonArray(response.data.results);
>>>>>>> 04_nav_bootstrap
    }
    loadPokemon();
  }, [])
<<<<<<< HEAD
=======

  const next = async () => {
    let data = await apiType.get(nextUrl);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }
>>>>>>> 04_nav_bootstrap

  function addItem(currentPokemon) {
    addToCart(currentPokemon)
  }
<<<<<<< HEAD
  
  return (<div className='container'>
    {pokemonArray
      .filter(pokemon => pokemon.pokemon.name.includes(searchTerm))
      .map(pokemon => {
        return <Card pokemon={pokemon} addToCart={addItem} key={pokemon.pokemon.name} />
      })}
  </div>);
=======
  console.log(pokemonArray)
  
  return (
      <>
      <Row>
        <ButtonGroup className='btn-group' aria-label="Basic example">
          <Button variant="secondary" className='button-prev'onClick={() => {
            //endShop()
          }}
          >Anteriores
          </Button>
            
          <Button variant="secondary" className='button-next'onClick={() => {
            //clearCart()
          }}
          >Posteriores
          </Button>
        </ButtonGroup>
        <Container>
          {pokemonArray
            .filter(pokemon => pokemon.name.includes(searchTerm))
            .map(pokemon => {
              return <PokeCard pokemon={pokemon} addToCart={addItem} key={pokemon.name} />
          })}
        </Container>
      </Row>
    </>
  );
>>>>>>> 04_nav_bootstrap

};
