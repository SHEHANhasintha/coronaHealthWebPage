import React , { useState,createContext } from 'react';


export const TryContext = createContext();

export const TryProvider = props =>  {
    const make = useState({
        high : 'hey this is',
        low : 'works'
    });

    return(
            <TryContext.Provider value={make}>
                {props.children}
            </TryContext.Provider>
        );

};