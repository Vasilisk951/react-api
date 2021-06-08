import React from 'react';

import { Button, TextField, Typography, Box } from '@material-ui/core/';

import './index.scss'

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
            <Box className='heading'>
                <Box>
                    Welcome!
                </Box>
                <Box>
                    To continue, please login or register
                </Box>
            </Box>
            <div className="entry">
                {!isAuth.isAuth ?
                    <>
                        <Button style={{ marginRight: '10px' }} className='entry__in' variant="contained" color="primary" onClick={handleOpenModal}>sign in</Button>
                        <Button className='entry__in' variant="contained" color="primary" href='/market/registration'>log in</Button>
                    </> :
                    <Button className='entry__in' variant="contained" color="primary" onClick={handleLogOut} href='/'>
                        <Box style={{ display: 'none' }}>{document.location.href = 'market/page1'}</Box>
                        log out
                    </Button>
                }
            </div>
            <Box className='market'>
                <Button
                    className='market__btn'
                    variant="contained"
                    color="primary"
                    href="/market/page1"
                >
                    Market
                </Button>

            </Box>
            <div className={isAuth.isAuth ? 'modal' : modalClass} >
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
                        <Box margin='10px 0' color='red'> {isAuth.isAuth ? '' : isAuth.errors}</Box>
                        <Button type='submit' variant="contained" color='primary'>ENTER</Button>

                    </form>

                </div>
            </div>


        </div >
    )
};

export default HomePageLayout;