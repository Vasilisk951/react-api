import React from 'react';
import { Box } from '@material-ui/core';

import HeaderContainer from '../../../../commonComponent/header/containers/HeaderContainer';
import avatar from './images/avatar.png'

import './index.css';

const ProfilePageLayout = ({
    user,
    listShop,
    logOut
}) => {
    return (
        <Box>
            <HeaderContainer />
            <Box className='profile'>
                <Box className='profile__user'>
                    <Box className='profile__head'>
                        <Box className='profile__avatar'>
                            <img className='profile__avatar-img' src={avatar} alt='avatar' />
                        </Box>
                        <Box className='profile__name'>
                            {user.userName}
                        </Box>
                    </Box>
                    <Box className='profile__setting'>
                        <Box className='setting__item'>Main</Box>
                        <Box className='setting__item'>Personal information</Box>
                        <Box className='setting__item'>Safety</Box>
                        <Box className='setting__item'>Access settings</Box>
                        <Box className='setting__item' onClick={logOut}>Log out</Box>
                    </Box>
                </Box>
                <Box className='profile__history'>
                    <Box className='history__head'>
                        history of your purchases
                    </Box>
                    <Box>
                        {console.log(listShop)}
                        {listShop.map(item => (
                            <Box className='history__item'>
                                <Box className='history__item__head'>Your order number №{item.id}</Box>
                                <Box className='history__item__body'>
                                    {item.data.map(pokemon => (
                                        <Box>
                                            <Box>Product name: {pokemon.name}</Box>
                                            <Box>Quantity: {pokemon.count}</Box>
                                            <Box>Unit price: ${pokemon.price}</Box>
                                        </Box>
                                    ))}
                                </Box>
                                <Box className='history__item__footer'><b>Total price</b> ${item.totalPrice}</Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default ProfilePageLayout;