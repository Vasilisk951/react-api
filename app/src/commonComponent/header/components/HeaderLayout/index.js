import React from 'react'
import {
    Button,
    Box,
    Menu,
    MenuItem,
    Link,
    IconButton,
    Badge
}
    from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import './index.css'

const HeaderLayout = ({ logOut, anchorEl, handleClick, handleClose, basketQuantity }) => {

    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge);

    return (
        <Box>
            <Box className='header'>
                <Box className='header__name'>
                    <Link className='header__link' href="/market">
                        Pokemon Market
                    </Link>
                </Box>
                <Box className='header__content'>
                    <Box className='header__basket'>
                        <IconButton href='/basket' aria-label="cart">
                            <StyledBadge badgeContent={basketQuantity.length} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
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
                            <MenuItem onClick={handleClose}><Button href='/profile'>Profile</Button></MenuItem>
                            <MenuItem onClick={logOut}><Button href='/'>Log out</Button></MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HeaderLayout;