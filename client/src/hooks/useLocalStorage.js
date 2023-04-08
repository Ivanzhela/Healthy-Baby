import { useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);

        if (storedData) {
            return JSON.parse(storedData);
        };

        return defaultValue;
    });

    const storeValueInState = (newValue) => {
        const data = JSON.stringify(newValue);
        localStorage.setItem(key, data);
        setValue(newValue);
    };

    return [
        value,
        storeValueInState,
    ];
};
