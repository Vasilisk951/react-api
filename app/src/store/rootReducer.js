import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage'

import registrationForm from '../pages/RegistrationPage/reducers';
import authReducers from '../pages/HomePage/reducers';
import marketReducer from '../pages/MarketPage/reducers';

const authBlackListedfields = createBlacklistFilter('authReducer', ['isLoading', 'errors']);
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth'],
    transforms: [authBlackListedfields]
}

const rootReducer = combineReducers({ registrationForm, authReducers, marketReducer });


export default persistReducer(persistConfig, rootReducer)
