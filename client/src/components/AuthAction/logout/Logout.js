import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { logout } from '../../../services/service';

export const Logout = () => {
    const navigate = useNavigate();
    const { user, logoutUserHandler } = useContext(AuthContext);

    useEffect(() => {
        logout()
        logoutUserHandler()
        navigate('/');

    }, [logoutUserHandler, navigate, user.token]);
};
