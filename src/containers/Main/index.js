import React, { memo, useState, useCallback, useEffect } from 'react';
import Api from '../../services/api';
import { ContainerStyled } from './style';
import Board from './components/Board';

function Main(){
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return(
        <ContainerStyled>
            <div className='mb-2'>
                <Board data={data}/>
            </div>
        </ContainerStyled>
    );
};

export default memo(Main);