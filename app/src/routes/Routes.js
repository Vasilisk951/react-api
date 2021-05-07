import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePageContainer from '../pages/HomePage/container/HomePageContainer';
import RegistationsContainers from '../pages/RegistrationPage/containers/RegistrationsContainer';
import MarketContainers from '../pages/MarketPage/containers/MarketContainers'

import PrivateRoute from './PrivateRoute';
import ROUTES from './routesNames';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
            <Route exact path={ROUTES.REGISTRATION} component={RegistationsContainers} />
            <PrivateRoute exact path={ROUTES.MARKET} component={MarketContainers} />


        </Switch>
    )
}

export default Routes;