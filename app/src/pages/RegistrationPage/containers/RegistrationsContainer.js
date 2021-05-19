import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegistationsLayout from '../components/RegistrationsLayout';
import {
    HANDLE_REGISTRATION_FORM_REQUEST,
} from '../actions'

const RegistationsContainers = () => {
    const [registrationValue, setRegistrationValue] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: {
            country: "",
            city: "",
            addressLine1: "",
            addressLine2: ""
        },
        gender: "",
        password: "",
        phone: ""
    })
    const dispatch = useDispatch();

    const handleFormChange = useCallback((event) => {
        let value = event.target.value;
        console.log(value)
        setRegistrationValue((state) => {
            return {
                ...state,
                [event.target.name]: value,
            }
        })
        console.log(registrationValue)

    }, [registrationValue])

    const handleFormSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(HANDLE_REGISTRATION_FORM_REQUEST(registrationValue))
    }, [registrationValue, dispatch]);

    return <RegistationsLayout
        registrationValue={registrationValue}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
    />
};

export default RegistationsContainers;

