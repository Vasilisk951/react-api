import React from 'react';
import { Link } from "react-router-dom";

import { Box, Button } from '@material-ui/core';

import './index.css'

const RegistationsLayout = ({ registrationValue, handleFormChange, handleFormSubmit }) => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const PASSORD_REGEXP = /^(?=.*[A-Z].)(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    const PHONE_REGEXP = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;


    const checkForm = () => {
        const { email, firstName, lastName, gender, password, repeatPassword, phone } = registrationValue;
        if (EMAIL_REGEXP.test(email) &&
            !!firstName &&
            !!lastName &&
            !!gender &&
            !!phone &&
            PHONE_REGEXP.test(phone) &&
            !!repeatPassword && password === repeatPassword) {
            return false;
        }
        return true;
    }
    return (
        <Box>
            <Button variant="contained" color="primary" href="/">home</Button>
            <Box className='message'>
                Fields marked with * are required
            </Box>
            <form
                className='formReg'
                onSubmit={handleFormSubmit}
            >
                <label>
                    <Box className='field__name'>Email <span>*</span></Box>
                    <input
                        name='email'
                        type="email"
                        required value={registrationValue.email}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    <Box className='field__name'>First name <span>*</span></Box>
                    <input
                        name='firstName'
                        type='text'
                        required
                        value={registrationValue.firstName}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    <Box className='field__name'>Last name <span>*</span></Box>
                    <input
                        name='lastName'
                        type='text' required
                        value={registrationValue.lastName}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    <Box className='field__name'>Country</Box>
                    <input
                        name='country'
                        type='text'
                        value={registrationValue.country}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    <Box className='field__name'>City</Box>
                    <input
                        name='city'
                        type='text'
                        value={registrationValue.city}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    <Box className='field__name'>Address line 1</Box>
                    <input
                        name='addressLine1'
                        type='text'
                        value={registrationValue.addressLine1}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    <Box className='field__name'>Address line 2</Box>
                    <input
                        name='addressLine2'
                        type='text'
                        value={registrationValue.addressLine2}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    <Box className='field__name'>Gender <span>*</span></Box>
                    <select
                        name='gender'
                        onChange={(event) => handleFormChange(event)}
                        required
                    >
                        <option></option>
                        <option name='female' value='female'>female</option>
                        <option name='male' value='male'>male</option>
                    </select>
                </label>
                <label>
                    <Box className='field__name'>Password <span>*</span></Box>
                    <input
                        className='password'
                        name='password'
                        type='password'
                        minLength='8'
                        required
                        value={registrationValue.password}
                        onChange={(event) => handleFormChange(event)}
                    />
                    <Box className='password__mesage'>
                        The minimum password length is 8 characters. Password must contain at least 1 uppercase letter, 2 lowercase letters and 3 numbers
                    </Box>
                </label>

                <label>
                    <Box className='field__name'>Repeat password <span>*</span></Box>
                    <input
                        name='repeatPassword'
                        type='password'
                        required
                        value={registrationValue.repeatPassword}
                        onChange={(event) => handleFormChange(event)}
                    />
                    <Box className='repeatPassword'>
                        {registrationValue.repeatPassword === registrationValue.password && registrationValue.repeatPassword !== '' ? 'Passwords match ✅' : 'Password mismatch ❌'}
                    </Box>
                </label>
                <label>
                    <Box className='field__name'>Phone <span>*</span></Box>
                    <input
                        name='phone'
                        type='number'
                        required
                        value={registrationValue.phone}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={checkForm()}
                >sing in</Button>
            </form>
        </Box>
    )
}

export default RegistationsLayout;