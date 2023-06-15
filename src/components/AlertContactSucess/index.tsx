import React, { useContext, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { Container } from './styles';
import { AppContext } from '../../context/Provider';

function AlertContactSucess() {
  const { submitForm } = useContext(AppContext);

  useEffect(() => {
    window.navigator.vibrate(300);
  }, []);

  return !submitForm ? (
    <Navigate to="/contact" />
  ) : (
    <Container>
      <div className="text-center">
        <Alert variant="success" className="container">
          <Alert.Heading>Enviado com sucesso!</Alert.Heading>
          <p>
            Agradecemos o seu contato e ficamos muito felizes em saber do seu interesse em
            nossos <em>produtos</em>
            .
            <br />
          </p>
          <p>Esperamos que sua experiência conosco supere as suas expectativas</p>
          <p className="mb-0">Retornaremos em breve.</p>
        </Alert>
        <div className="mt-5">
          <Link to="/" className="global-btn">
            Voltar
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default AlertContactSucess;
