import React from 'react';
import Loader from '../../components/loader';
import Pokemon from '../../components/pokemon';
import Pagination from '../../components/pagination';

import PokeService from '../../services/pokeservice';

import './pokemon-container.css';

const PokemonContainer = () => {

  let pokemons = PokeService.getPokemons();
  console.log(pokemons)

  return (
    <div className="pokemon-container">

    </div>
  )
};

export default PokemonContainer;