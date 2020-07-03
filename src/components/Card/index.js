import React, { useEffect, useState } from 'react';
import { store } from 'react-notifications-component';
import api from '../../services/api';
import capitalizeLetter from './../../utils/capitalize'
import './styles.css';
import {
  Card, Container, Row, Col, CardGroup, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const unknownSprite = 'https://images.vexels.com/media/users/3/155301/isolated/preview/6a91c0d6c8ba37a9fd115e1776300319-pergunta-do-doodle-do-ponto-de-interroga----o-3d-by-vexels.png';

export default function PokeCard({ pokemon, addToCart }) {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [pokemonSprite, setPokemonSprite] = useState('');

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get(pokemon.url);
      setCurrentPokemon(response.data);

      if (response.data.sprites.front_default != null)
        setPokemonSprite(response.data.sprites.front_default);
      else
        setPokemonSprite(unknownSprite);
    }
    loadPokemon();
  }, [pokemon])

  return (
    <Container xs="8" className="gap" fluid={true}>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>   
        <Card className="mx-auto my-3">
          <img className='poke_card_image' width="50%" src={pokemonSprite} alt={currentPokemon.name} rounded  />
          <CardBody>
            <CardTitle><p>Nome: {capitalizeLetter(currentPokemon.name)}</p></CardTitle>

            <CardSubtitle>
              <p>
                Preço: R$ {parseFloat((currentPokemon.weight + currentPokemon.height + currentPokemon.base_experience) / 3).toFixed(2)}
              </p>
            </CardSubtitle>

            <CardSubtitle>
              <p>Peso: {currentPokemon.weight}</p>
            </CardSubtitle>

            <CardSubtitle>
              <p>Height: {currentPokemon.height}</p>
            </CardSubtitle>
              
            <button onClick={() => {
              store.addNotification({
                title: 'Adicionado ao carrinho',
                insert: 'bottom',
                type: 'info',
                message: currentPokemon.name,
                container: 'bottom-right',
                dismiss: {
                  duration: 1500,
                  onScreen: true
                }
              });
              return addToCart(currentPokemon)
              }
            }
              >Adicionar pokemon ao carrinho</button>
          </CardBody>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}