import React, { useState, createContext } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [ count, setCount] = useState(0);
    const values = {
        count,
        suma(){
            setCount( val => val+1 );
        },
        resta(){
            setCount( val => val-1 );
        },
        user: {
            status: "Online",
            jwt: "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.mPHW-NA1g0SXluUaNfbBnWMi705hFUGyFlpxUuLc4uA",
            theme: "light"

        }
    };

    return (<CounterContext.Provider value={ values }>{ children }</CounterContext.Provider>
    );
}
