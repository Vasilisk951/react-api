import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {

};

const registrationReducer = handleActions({
    [actions.HANDLE_REGISTRATION_FORM_CHANGE]: (state, event) => ({
        ...state,
        [event.payload.target.name]: event.payload.target.value,
    }),
    [actions.HANDLE_REGISTRATION_FORM_REQUEST]: (state) => {
        const stateCopy = {
            email: state.email,
            firstName: state.firstName,
            lastName: state.lastName,
            address: {
                country: `${state.country === undefined ? '' : state.country}`,
                city: `${state.city === undefined ? '' : state.city}`,
                addressLine1: `${state.addressLine1 === undefined ? '' : state.addressLine1}`,
                addressLine2: `${state.addressLine2 === undefined ? '' : state.addressLine2}`,
            },
            gender: state.gender,
            password: state.password,
            phone: state.phone,
        }
        console.log(stateCopy)
        return stateCopy
    },
    [actions.HANDLE_REGISTRATION_FORM_SUCCESS]: (state, { payload }) => ({
        ...state,
    }),
    [actions.HANDLE_REGISTRATION_FORM_FAIL]: (state, { payload }) => {
        console.log(payload);
        let response = payload.response.join(', ')
        return {
            ...state,
            error: response
        }
    }

}, initialState)

export default registrationReducer;