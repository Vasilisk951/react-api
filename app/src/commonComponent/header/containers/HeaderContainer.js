import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core/';

import HeaderLayout from '../components/HeaderLayout/index';

const HeaderContainer = () => {
    const basketQuantity = useSelector(state => state.basketPokemon.pokemons);
    console.log(basketQuantity)

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
    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge);

    return <HeaderLayout
        logOut={logOut}
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        basketQuantity={basketQuantity}
        StyledBadge={StyledBadge}
    />
}

export default React.memo(HeaderContainer);