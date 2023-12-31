import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import { AppContext } from '../../context/Provider';
import Form from '../../components/Form';
import Loading from '../../components/Loading';
import setPageDescription from '../../utils/setPageDescription';

function Contact() {
  const { submitForm, errorSubmitForm, isLoading } = useContext(AppContext);

  useEffect(() => {
    setPageTitle('Contato - Kifol Fertilizantes');
    setPageDescription('Entre em contato com a Kifol Fertilizantes');
  }, []);

  let content;
  if (isLoading) {
    content = <Loading text="Enviando..." />;
  } else if (!submitForm) {
    content = <Form />;
  } else if (!errorSubmitForm) {
    content = <Navigate to="/obrigado" />;
  } else {
    content = <Navigate to="/error" />;
  }

  return <Container>{content}</Container>;
}

export default Contact;
