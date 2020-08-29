import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext/AuthContext';

//Private route check if the user is authorizated
const PrivateRoute = ({ component: Component, ...rest }) => {

  const { token } = useContext(AuthContext);

  return (
    <Route {...rest} render={props =>
        !token ? ( <Redirect to='/' /> ) : ( <Component {...props} /> )
      }
    />
  );
};

export default PrivateRoute;