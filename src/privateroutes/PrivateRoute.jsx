import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contextapi/ContextApi';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(user, "user");
    // console.log(loading);
    if(loading){
        return <p>loading...</p>
    }
    if(!user){
       return <Navigate state={location?.pathname} replace to='/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;