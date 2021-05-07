import React, { useState } from 'react'
import {
    Button,
    Typography,
    Box, Card,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    Menu,
    MenuItem

} from '@material-ui/core/';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './index.css'

const HeaderLayout = ({ logOut, anchorEl, handleClick, handleClose, basketPokemon }) => {
    console.log(basketPokemon.length)
    return (
        <Box>
            <Box className='header'>
                <Box className='header__name'>
                    Pokemon Market
                </Box>
                <Box className='header__content'>
                    <Box className='header__basket'>
                        <Button><ShoppingBasketIcon />{basketPokemon.length}</Button>
                    </Box>
                    <Box className='header__menu'>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Open Menu
                    </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={logOut}><Button href='/'>Log out</Button></MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HeaderLayout;