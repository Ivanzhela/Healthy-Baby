import { useState } from "react";
import { Lodaing } from "../components/shared/Loading/Loading";

export const useLoading = () => {

    const [isLoading, setIsLoading] = useState(false);

    const setLoading = (boolean) => {
        setIsLoading(boolean);

        if (boolean === true) {
            return <Lodaing />
        };

        return;
    };

    return [
        isLoading,
        setLoading
    ];
};