import React from 'react';

import { Button, TextField, Typography, Box } from '@material-ui/core/';

import './index.css'

const HomePageLayout = ({
    modalClass,
    loginValue,
    isAuth,
    handleOpenModal,
    handleCloseModal,
    handleLoginChange,
    handleSubmit,
    handleLogOut
}) => {
    return (
        <div>
            <div className="entry">
                {!isAuth.isAuth ? <Button className='entry__up' variant="contained" color="primary" href="/registration">sign up</Button> : ''}
                {!isAuth.isAuth ?
                    <Button className='entry__in' variant="contained" color="primary" onClick={handleOpenModal}>sign in</Button> :
                    <Button className='entry__in' variant="contained" color="primary" onClick={handleLogOut} href='/'>log out</Button>
                }
            </div>
            <Box className='market'>
                <Button
                    className='market__btn'
                    variant="contained"
                    color="primary"
                    href="/market"
                >
                    Market
                </Button>

            </Box>
            <div className={modalClass}>
                <div className='modal__fon' onClick={handleCloseModal}></div>
                <div className='modal__content'>
                    <form onSubmit={event => handleSubmit(event)}>
                        <Typography className='modal-logo'>Enter your account</Typography>
                        <TextField
                            className='modal-input'
                            label="Email"
                            type='email'
                            name='email'
                            value={loginValue.email}
                            onChange={(event) => handleLoginChange(event)}
                            required
                        />
                        <TextField
                            className='modal-input'
                            label="Password"
                            type='password'
                            name='password'
                            value={loginValue.password}
                            onChange={(event) => handleLoginChange(event)}
                            required
                        />
                        <Button type='submit' variant="contained" color='primary'>ENTER</Button>
                    </form>

                </div>
            </div>


        </div>
    )
};

export default HomePageLayout;