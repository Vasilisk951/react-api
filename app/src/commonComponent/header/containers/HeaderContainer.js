import React, { useEffect, useState } from 'react';

import HeaderLayout from '../components/HeaderLayout/index'


const HeaderContainer = ({ basketPokemon }) => {

    const [anchorEl, setAnchorEl] = useState(null);


    const logOut = () => {
        localStorage.clear();
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <HeaderLayout
        logOut={logOut}
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        basketPokemon={basketPokemon}
    />
}

export default HeaderContainer;