import {useContext} from 'react';
import {Navigate, Outlet, useLcaotion} from 'react-router-dom';
import {UserContext} from '../contexts/user.context';

const PrivateRoute = () => {
    //fetching the user from the context file 
    const {user} = useContext(UserContext);
    const location = useLocation();
    const redirectLoginUrl = '/login>?redirectTo=${encodeURI(location.pathname)}';

    // redirects to the login page unless the user is logged in

    return !user ? <Navigate to={redirectLoginUrl} /> : <Outlet />;
}

export default PrivateRoute;