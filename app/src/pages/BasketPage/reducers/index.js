import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const initialState = {
    listShop: []
};

const basketPageReducer = handleActions({
    [actions.HANDLE_BUY_ALL_POKEMONS]: (state, { payload }) => {
        const stateCopy = { ...state };
        console.log(payload)
        stateCopy.listShop.push({
            id: Math.random() * Math.pow(10, 17),
            totalPrice: payload.price,
            data: payload.products
        })
        console.log(stateCopy)
        return stateCopy;
    }
}, initialState);

export default basketPageReducer;