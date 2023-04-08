import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const PublicGuard = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user.token) {
        return <Navigate to="/catalog" />
    };

    return <Outlet />;
};
