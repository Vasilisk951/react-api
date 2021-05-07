import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegistationsLayout from '../components/RegistrationsLayout';
import {
    HANDLE_REGISTRATION_FORM_CHANGE,
    HANDLE_REGISTRATION_FORM_REQUEST,
} from '../actions'

const RegistationsContainers = () => {
    const dispatch = useDispatch();
    const registrationUser = useSelector((state => state.registrationForm))

    const handleFormChange = useCallback((event) => {
        dispatch(HANDLE_REGISTRATION_FORM_CHANGE(event))
    }, [dispatch]);

    const handleFormSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(HANDLE_REGISTRATION_FORM_REQUEST(registrationUser))
    }, [registrationUser, dispatch]);

    return <RegistationsLayout
        registrationUser={registrationUser}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
    />
};

export default RegistationsContainers;

