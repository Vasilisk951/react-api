import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const initialBasket = {
    pokemons: [],
};

const basketPokemonReducer = handleActions({
    [actions.HANDLE_BUY_POKEMON]: (state, { payload }) => {
        const stateCopy = { ...state };
        console.log(payload)
        const pokemonID = payload.id;
        const pokemonData = payload.pokemon;
        let positionIdInArray;
        for (let i = 0; i < pokemonData.length; i++) {
            if (pokemonID === pokemonData[i].id) {
                positionIdInArray = i
            }
        }
        console.log(stateCopy)
        const basket = stateCopy.pokemons.find((item) => item.id === pokemonID)

        if (!basket) {
            stateCopy.pokemons.push({
                id: pokemonData[positionIdInArray].id,
                image: pokemonData[positionIdInArray].image,
                name: pokemonData[positionIdInArray].name,
                price: pokemonData[positionIdInArray].price,
                count: 1,
            })
        } else {
            for (let i = 0; i < stateCopy.pokemons.length; i++) {
                if (stateCopy.pokemons[i].id === pokemonID) {
                    stateCopy.pokemons[i].count = stateCopy.pokemons[i].count + 1;
                }
            }
        }
        return stateCopy
    },
    [actions.HANDLE_INCREMENT]: (state, { payload }) => {
        const stateCopy = { ...state }
        stateCopy.pokemons[payload].count = stateCopy.pokemons[payload].count + 1;
        return stateCopy
    },
    [actions.HANDLE_DECREMENT]: (state, { payload }) => {
        const stateCopy = { ...state }
        if (stateCopy.pokemons[payload].count === 1) {
            stateCopy.pokemons.splice(payload, 1)
        } else {
            stateCopy.pokemons[payload].count = stateCopy.pokemons[payload].count - 1;
        }
        return stateCopy
    },
    [actions.HANDLE_REMOVE]: () => {
        return initialBasket;
    }
}, initialBasket)

export default basketPokemonReducer;