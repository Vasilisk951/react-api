import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage'

import registrationForm from '../pages/RegistrationPage/reducers';
import authReducers from '../pages/HomePage/reducers';
import marketReducer from '../pages/MarketPage/reducers';
import basketPokemon from '../pages/MarketPage/reducers/basketPokemon.js';
import pokemonDetails from '../pages/PokemonDetailsPage/reducers';
import basketPageReducer from '../pages/BasketPage/reducers';
import orderList from '../pages/ProfilePage/reducers';
import activePage from '../pages/MarketPage/reducers/activePage';

const authBlackListedfields = createBlacklistFilter('authReducers', ['isLoading', 'errors']);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducers', 'basketPokemon'],
    transforms: [authBlackListedfields]
}

const rootReducer = combineReducers({
    registrationForm,
    authReducers,
    marketReducer,
    basketPokemon,
    pokemonDetails,
    basketPageReducer,
    orderList,
    activePage,
});


export default persistReducer(persistConfig, rootReducer)
