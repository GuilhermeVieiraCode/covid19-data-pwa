import React, { memo } from 'react';
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from './style';

const navigatorHasShare = navigator.share;

function Panel({ updatedAt, onChange, data, country }){
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const textCovid19 = `País: ${country} -
                       Dados atualizados em ${updatedAt} -
                       Hoje - Casos: ${todayCases}. Óbitos: ${todayDeaths}.
                       Total - Casos: ${cases}. Óbitos: ${deaths}. Recuperados: ${recovered}`;

  const shareInfo = () => {
      navigator.share({
            title: `Dados do Covid-19 - ${country}`,
            text: textCovid19,
            url: '',
      });
  };

  const renderShareButton = (
      <div>
          <Button variant="contained" color="primary" onClick={shareInfo}>
              Compartilhar
          </Button>
      </div>
  );

  const copyInfo = () => {
      navigator.clipboard.writeText(textCovid19);
  };

  const renderCopyButton = (
      <div>
          <Button variant="contained" color="primary" onClick={copyInfo}>
              Copiar
          </Button>
      </div>
  );
  
  const renderCountries = (country, index) => (
      <MenuItem key={`country-${index}`} value={country.value}>
          <ItemStyled>
              <div>{country.label}</div>
              <img src={country.flag} alt={`País-${country.label}`}/>
          </ItemStyled>
      </MenuItem>
  );

  return(
      <Card>
          <CardPanelContentStyled>
              <div>
                <Typography variant="h5" component="span" color="primary">COVID-19</Typography>
                <Typography variant="h6" component="p">Painel Coronavírus</Typography>
                <Typography variant="body2" component="span" color="secondary">Atualizado em: {updatedAt}</Typography>
                <div className="pt-2">
                    <Select onChange={onChange} value={country}>
                        {COUNTRIES.map(renderCountries)}
                    </Select>
                </div>
            </div>
            {navigatorHasShare ? renderShareButton : renderCopyButton}
          </CardPanelContentStyled>
      </Card>
  );
};

export default memo(Panel);