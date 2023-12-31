/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import setPageDescription from '../../utils/setPageDescription';

function Error() {
  useEffect(() => {
    setPageTitle('Página Não Encontrada - Kifol Fertilizantes');
    setPageDescription('Página não encontrada.');
  }, []);

  return (
    <Container>
      <div className="pt-5">
        <div className="central-body">
          <h1 className="title-404">404</h1>
          <p className="text-404">Parece que você está</p>
          <p className="text-404">perdido no espaço</p>
          <Link to="/" className="btn-go-home">
            VOLTAR
          </Link>
        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
            alt="Rocket"
          />
          <div className="earth-moon">
            <img
              className="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
              alt="Terra"
            />
            <img
              className="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
              alt="Lua"
            />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"
              alt="Astronalta"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
      </div>
    </Container>
  );
}

export default Error;
