import React, { useEffect, useState } from 'react';
import './styles.css';
import PokeCard from '../Card';
import { apiType } from '../../services/api';
import { Container, Button, ButtonGroup, Row } from 'react-bootstrap';

export default function CardsContainer({ addToCart, searchTerm }) {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const initialURL = `https://pokeapi.co/api/v2/pokemon/`;

  useEffect(() => {
    async function loadPokemon() {
      const response = await apiType.get(initialURL);
      console.log('Antes:', response.data.next);
      setNextUrl(response.data.next);
      console.log('Proximo:', nextUrl);
      setPrevUrl(response.data.previous);
      setPokemonArray(response.data.results);
    }
    loadPokemon();
  }, [])

  const next = async () => {
    let response = await apiType.get(nextUrl);
    setPokemonArray(response.data.results);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
  }

  const prev = async () => {
    if (!prevUrl) return;
    let response = await apiType.get(prevUrl);
    setPokemonArray(response.data.results);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
  }

  function addItem(currentPokemon) {
    addToCart(currentPokemon)
  }
  console.log(pokemonArray)
  
  return (

      <Row>
        <ButtonGroup className='btn-group' aria-label="Basic example">
          <Button variant="secondary" className='button-prev'onClick={() => {
            prev();
          }}
          >Anteriores
          </Button>
            
          <Button variant="secondary" className='button-next'onClick={() => {
            next();
          }}
          >Próximos
          </Button>
        </ButtonGroup>
        <Container>
          {pokemonArray
            .filter(pokemon => pokemon.name.includes(searchTerm))
            .map(pokemon => {
              return <PokeCard pokemon={pokemon} addToCart={addItem} key={pokemon.name} />
          })}
        </Container>
        <ButtonGroup className='btn-group' aria-label="Basic example">
          <Button variant="secondary" className='button-prev'onClick={() => {
            prev();
          }}
          >Anteriores
          </Button>
            
          <Button variant="secondary" className='button-next'onClick={() => {
            next();
          }}
          >Próximos
          </Button>
        </ButtonGroup>
        
      </Row>
  );

};