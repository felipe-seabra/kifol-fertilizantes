/* eslint-disable no-console */
import React, { useState, useContext, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Form as BootstrapForm, Button, FloatingLabel } from 'react-bootstrap';
import { Container, ContainerSpeak } from './styles';
import { AppContext } from '../../context/Provider';

import RequiredField from '../../helpers/RequiredField';

import verifyBtn, {
  verifyFieldName,
  verifyFieldEmail,
  verifyFieldMessage,
  verifyFieldCheckbox,
  verifyFieldPhone,
  verifyFieldSubject
} from '../../utils/verifyBtn';
import { IFormValues } from '../../interfaces';
import phoneMask from '../../utils/phoneMask';

function Form() {
  const { setSubmitForm, setErrorSubmitForm, setIsLoading } = useContext(AppContext);

  const [formValues, setFormValues] = useState<IFormValues>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    checkbox: false
  });

  const handleFormSubmit = (): void => {
    setSubmitForm(true);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        'umbler',
        'template_k6yrspb',
        e.target as HTMLFormElement,
        'pQs69XqnkBggTWGIR'
      )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        handleFormSubmit();
        setIsLoading(false);
      })
      .catch((error: EmailJSResponseStatus) => {
        console.log(error.text);
        setErrorSubmitForm(true);
        setIsLoading(false);
      });
  };

  const handleFormSubmitIsLoading = (e: FormEvent<HTMLFormElement>): void => {
    setIsLoading(true);
    console.log(e);
    sendEmail(e);
  };

  return (
    <Container>
      <div className="mb-5">
        <h2 className="text-center mb-4">Entre em contato!</h2>
        <BootstrapForm className="form" onSubmit={handleFormSubmitIsLoading}>
          <>
            {/* input all name */}
            <RequiredField isValid={verifyFieldName(formValues.name)} />
            <FloatingLabel
              controlId="floatingInput"
              label="Nome completo*"
              className="mb-3">
              <BootstrapForm.Control
                type="text"
                placeholder="Nome completo"
                autoFocus
                value={formValues.name}
                name="name"
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                required
              />
            </FloatingLabel>
            {/* input all email */}
            <RequiredField isValid={verifyFieldEmail(formValues.email)} />
            <FloatingLabel controlId="floatingInput" label="E-mail*" className="mb-3">
              <BootstrapForm.Control
                type="email"
                placeholder="name@example.com"
                value={formValues.email}
                name="email"
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                required
              />
            </FloatingLabel>
            {/* input phone */}
            <RequiredField isValid={verifyFieldPhone(formValues.phone)} />
            <FloatingLabel controlId="floatingInput" label="Telefone*" className="mb-3">
              <BootstrapForm.Control
                type="tel"
                placeholder="(xx)xxxxx-xxxx"
                value={formValues.phone}
                name="phone"
                onChange={(e) =>
                  setFormValues({ ...formValues, phone: phoneMask(e.target.value) })
                }
                required
              />
            </FloatingLabel>
            {/* input all subject */}
            <RequiredField isValid={verifyFieldSubject(formValues.subject)} />
            <FloatingLabel controlId="floatingInput" label="Assunto*" className="mb-3">
              <BootstrapForm.Control
                type="text"
                placeholder="Assunto"
                autoFocus
                value={formValues.subject}
                name="subject"
                onChange={(e) =>
                  setFormValues({ ...formValues, subject: e.target.value })
                }
                required
              />
            </FloatingLabel>
            {/* input message */}
            <RequiredField isValid={verifyFieldMessage(formValues.message)} />
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Deixe sua mensagem aqui*"
              className="mb-3">
              <BootstrapForm.Control
                as="textarea"
                placeholder="Deixe sua mensagem aqui"
                style={{ height: '100px' }}
                value={formValues.message}
                name="message"
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                required
              />
            </FloatingLabel>
          </>
          {/* input checkbox */}
          <RequiredField isValid={verifyFieldCheckbox(formValues.checkbox)} />
          <BootstrapForm.Check
            label="Aceito enviar meus dados."
            className="mb-3 checkbox"
            type="checkbox"
            readOnly={formValues.checkbox}
            name="checkbox"
            onClick={() =>
              setFormValues({ ...formValues, checkbox: !formValues.checkbox })
            }
          />
          {/* submit button */}
          <Button
            variant="primary"
            type="submit"
            className="global-btn"
            value="Send"
            disabled={verifyBtn(formValues)}>
            Enviar
          </Button>
        </BootstrapForm>
      </div>
      <ContainerSpeak>
        <h4>Fale Conosco</h4>
        <p>
          <strong>Envie seu e-mail para nós.</strong>
        </p>
        <p>
          Nós estamos muito interessados no que você tem a dizer. Por isso, criamos este
          espaço especialmente para você fazer seus comentários, dar sugestões e
          esclarecer dúvidas. Escreva pra gente! É fácil, rápido e teremos o maior prazer
          em responder.
        </p>
      </ContainerSpeak>
    </Container>
  );
}

export default Form;
