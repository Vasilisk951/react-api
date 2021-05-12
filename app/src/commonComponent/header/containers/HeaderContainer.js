import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux'


import HeaderLayout from '../components/HeaderLayout/index';

const HeaderContainer = () => {
    const basketQuantity = useSelector(state => state.basketPokemon.pokemons);

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
        basketQuantity={basketQuantity}
    />
}

export default React.memo(HeaderContainer);