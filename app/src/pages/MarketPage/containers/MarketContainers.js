import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';

import MarketLayout from '../components/MarketLayout'


const MarketContainers = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.marketReducer);

    const [basketPokemon, setBasketPokemon] = useState([]);

    useEffect(() => {
        dispatch(actions.GET_POKEMON_REQUEST())
    }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const hendlePokemonBuy = useCallback((event) => {
        const pokemon = event.target.offsetParent.id;
        pokemons.data.forEach(pokemons => {
            if (pokemon == pokemons.id) {
                setBasketPokemon((state) => {
                    const stateCopy = state;
                    stateCopy.push({
                        id: pokemons.id,
                        image: pokemons.image,
                        name: pokemons.name,
                        price: pokemons.price,
                        count: 1,
                    });
                    return stateCopy
                })
            }
        })

    }, [basketPokemon])

    return <MarketLayout
        pokemons={pokemons}
        capitalizeFirstLetter={capitalizeFirstLetter}
        hendlePokemonBuy={hendlePokemonBuy}
        basketPokemon={basketPokemon}
    />
}

export default MarketContainers;