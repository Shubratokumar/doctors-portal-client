import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from './../Shared/Loading';
import useAdmin from './../../hooks/useAdmin';
import { signOut } from 'firebase/auth';
import {
  useLocation,
  Navigate,
} from "react-router-dom";

const RequireAdmin = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const [ admin , adminLoading ] = useAdmin(user)
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading></Loading>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;