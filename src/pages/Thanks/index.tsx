import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import AlertContactSucess from '../../components/AlertContactSucess';
import setPageDescription from '../../utils/setPageDescription';

function Thanks() {
  useEffect(() => {
    setPageTitle('Obrigado - Kifol Fertilizantes');
    setPageDescription('Obrigado por entrar em contato com a Kifol Fertilizantes.');
  }, []);

  return (
    <Container>
      <AlertContactSucess />
    </Container>
  );
}

export default Thanks;
