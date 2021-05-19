import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../../routes/routesNames';

import MarketLayout from '../components/MarketLayout';

const MarketContainers = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const marketReducer = useSelector(state => state.marketReducer);
    const pokemon = marketReducer.data;
    const pages = []

    useEffect(() => {
        dispatch(actions.GET_POKEMON_REQUEST(1))
    }, [dispatch])

    const createNumberPages = () => {
        for (let i = 1; i < 46; i++) {
            pages.push(i)
        }
    }
    createNumberPages()

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleBuyPokemon = useCallback((id) => {
        dispatch(actions.HANDLE_BUY_POKEMON({ id, pokemon }));
    }, [dispatch, pokemon])

    const handleGoToDetails = useCallback((id) => {
        history.push(`${ROUTES.MARKET}/${id}`)
    }, [])

    const handleChangePage = useCallback((id) => {
        dispatch(actions.GET_POKEMON_REQUEST(id))

        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }, [dispatch])

    return <MarketLayout
        pokemons={marketReducer}
        capitalizeFirstLetter={capitalizeFirstLetter}
        hendlePokemonBuy={handleBuyPokemon}
        handleGoToDetails={handleGoToDetails}
        pages={pages}
        handleChangePage={handleChangePage}
    />
}

export default MarketContainers;