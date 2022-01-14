import React, { createContext, useState, useCallback} from 'react';
import axios from 'axios';

export const CovidApiContext = createContext({
    country: {}
});

const CovidApiProvider = ({ children }) => {
    const [dataState, setDataState] = useState({});
    const baseUrl = 'https://coronavirus-19-api.herokuapp.com/countries';

    const getCovidData = (country) => {
        axios.get(`${baseUrl}/${country}`)
            .then(({data}) => {
                setDataState(data);
            })
        };    

    const contextValue = {
        dataState,
        getCovidData: useCallback((country) => getCovidData(country), [])
    };

    return(
        <CovidApiContext.Provider value={contextValue}>
            {children}
        </CovidApiContext.Provider>
    );
};

export default CovidApiProvider;

