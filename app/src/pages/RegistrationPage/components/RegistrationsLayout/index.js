import React from 'react';
import { Link } from "react-router-dom";

import { Button } from '@material-ui/core';

import './index.css'

const RegistationsLayout = ({ registrationUser, handleFormChange, handleFormSubmit }) => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const PASSORD_REGEXP = /^(?=.*[A-Z].)(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/;
    const PHONE_REGEXP = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;


    const checkForm = () => {
        const { email, firstName, lastName, gender, password, repeatPassword, phone } = registrationUser;
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
        <div>
            <Button variant="contained" color="primary" href="/">home</Button>
            <form
                className='formReg'
                onSubmit={handleFormSubmit}

            >
                <label>
                    <span>Email:</span>
                    <input
                        name='email'
                        type="email"
                        required value={registrationUser.email}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    First Name:
                    <input
                        name='firstName'
                        type='text'
                        required
                        value={registrationUser.firstName}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        name='lastName'
                        type='text' required
                        value={registrationUser.lastName}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    Country:
                    <input
                        name='country'
                        type='text'
                        value={registrationUser.country}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    City:
                    <input
                        name='city'
                        type='text'
                        value={registrationUser.city}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    Address Line 1:
                    <input
                        name='addressLine1'
                        type='text'
                        value={registrationUser.addressLine1}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    Address Line 2:
                    <input
                        name='addressLine2'
                        type='text'
                        value={registrationUser.addressLine2}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    Gender:
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
                    Password:
                    <input
                        name='password'
                        type='password'
                        required
                        value={registrationUser.password}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    Repeat password:
                    <input
                        name='repeatPassword'
                        type='password'
                        required
                        value={registrationUser.repeatPassword}
                        onChange={(event) => handleFormChange(event)}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        name='phone'
                        type='number'
                        required
                        value={registrationUser.phone}
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
        </div>
    )
}

export default RegistationsLayout;