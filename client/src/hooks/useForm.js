import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
import * as service from "../services/service";
import { errorHandler } from "../validators/errorHandler";

export const useForm = (initialValues, action, params, nav, isAuth) => {

    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setError] = useState({});
    const { AuthUserHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const errors = errorHandler(formValues);
        setError(errors);

        if (Object.values(errors).length === 0) {

            try {

                const response = await service[action](params, { ...formValues });
                setFormValues(initialValues);

                if (isAuth) {
                    AuthUserHandler(response);
                };

                if (nav) {
                    navigate(nav)
                };

                return response;

            } catch (err) {
                setError(err);
            };
        };
    };

    return {
        formValues,
        onChangeHandler,
        setFormValues,
        onSubmit,
        errors
    };
};