import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import AlertContactError from '../../components/AlertContactError';
import setPageDescription from '../../utils/setPageDescription';

function Sorry() {
  useEffect(() => {
    setPageTitle('Desculpa - Kifol Fertilizantes');
    setPageDescription('Desculpe, ocorreu um erro ao enviar o formulário.');
  }, []);

  return (
    <Container>
      <AlertContactError />
    </Container>
  );
}

export default Sorry;
