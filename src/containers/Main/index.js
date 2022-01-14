import React, { memo, useState, useEffect } from 'react';
import { ContainerStyled } from './style';
import Board from './components/Board';
import Panel from './components/Panel'
import useCovidApi from '../../services/hooks';

function Main(){
    const { dataState, getCovidData } = useCovidApi();

    const [country, setCountry] = useState('brazil');
    const updatedAt = new Date().toLocaleString();

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country]);

    const handleChange = ({ target }) => {
        const country = target.value;
        setCountry(country);
    }

    return(
        <ContainerStyled>
            <div className='mb-2'>
                <Panel
                    data={dataState}
                    updatedAt={updatedAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}
                />
            </div>
            <Board data={dataState}/>
        </ContainerStyled>
    );
};

export default memo(Main);