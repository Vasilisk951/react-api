import React from 'react';
import { useSelector } from 'react-redux';

import ProfilePageLayout from '../components/ProfilePageLayout'


const ProfilePageContainer = () => {

    const user = useSelector(state => state.authReducers);
    const listShop = useSelector(state => state.basketPageReducer.listShop)

    const logOut = () => {
        localStorage.clear();
        window.location.href = '/'
    };

    return <ProfilePageLayout
        user={user}
        listShop={listShop}
        logOut={logOut}
    />
};

export default ProfilePageContainer;