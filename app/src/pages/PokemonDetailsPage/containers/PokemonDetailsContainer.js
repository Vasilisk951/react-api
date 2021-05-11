import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions';
import * as action from '../../MarketPage/actions'

import PokemonDetailsLayout from '../components/PokemonDetailsLayout'


const PokemonDetailsContainer = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const pokemonDetails = useSelector(state => state.pokemonDetails);
    useEffect(() => {
        dispatch(actions.GET_POKEMON_DETAILS_REQUEST(params.id))
    }, [])
    const buyPokemon = useCallback((id) => {
        const pokemon = [{
            id: pokemonDetails.details.id,
            image: pokemonDetails.details.image,
            name: pokemonDetails.details.name,
            price: pokemonDetails.details.price,
        }]
        dispatch(action.HANDLE_BUY_POKEMON({ id, pokemon }))
    }, [dispatch, pokemonDetails])

    return <PokemonDetailsLayout
        pokemonDetails={pokemonDetails}
        buyPokemon={buyPokemon}
    />
}

export default PokemonDetailsContainer;