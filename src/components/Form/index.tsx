/* eslint-disable no-console */
import React, { useState, useContext, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Form as BootstrapForm, Button, FloatingLabel } from 'react-bootstrap';
import {
  Container,
  TitleForm,
  ContainerSpeak,
  SocialLinkContacts,
  SocialIconContacts,
  SocialLinkContactsContainer
} from './styles';
import { AppContext } from '../../context/Provider';

import RequiredField from '../../helpers/RequiredField';

import verifyBtn, {
  verifyFieldName,
  verifyFieldEmail,
  verifyFieldMessage,
  verifyFieldCheckbox,
  verifyFieldPhone
} from '../../utils/verifyBtn';
import { IFormValues } from '../../interfaces';
import phoneMask from '../../utils/phoneMask';
import {
  URL_FACEBOOK,
  URL_INSTAGRAM,
  URL_LINKEDIN,
  URL_MAIL_FORMATED
} from '../../database/social';

const TEXT = `Valorizamos muito a sua opinião e queremos ouvir o que você tem a dizer. Por isso, reservamos este espaço especialmente para que você possa compartilhar seus comentários, sugestões e esclarecer quaisquer dúvidas que possa ter. Escreva para nós! É simples, rápido e teremos imenso prazer em responder.`;

function Form() {
  const { setSubmitForm, setErrorSubmitForm, setIsLoading } = useContext(AppContext);

  const [formValues, setFormValues] = useState<IFormValues>({
    name: '',
    email: '',
    phone: '',
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
        'template_tb43ujx',
        e.target as HTMLFormElement,
        'V0hNDFS9XeiBB9u5g'
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
    sendEmail(e);
  };

  return (
    <Container>
      <div className="mb-5">
        <TitleForm className="text-center mb-4">Entre em contato!</TitleForm>
        <BootstrapForm className="form" onSubmit={handleFormSubmitIsLoading}>
          <>
            {/* input all name */}
            <RequiredField
              isValid={verifyFieldName(formValues.name)}
              text="Precisamos do seu nome completo!"
            />
            <FloatingLabel label="Nome completo" className="mb-3">
              <BootstrapForm.Control
                type="text"
                placeholder="Nome"
                autoFocus
                value={formValues.name}
                name="name"
                autoComplete="on"
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                required
              />
            </FloatingLabel>
            {/* input email */}
            <RequiredField
              isValid={verifyFieldEmail(formValues.email)}
              text="Digite um e-mail válido!"
            />
            <FloatingLabel label="E-mail: funalo@email.com" className="mb-3">
              <BootstrapForm.Control
                type="email"
                placeholder="E-mail"
                value={formValues.email}
                name="email"
                autoComplete="on"
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                required
              />
            </FloatingLabel>
            {/* input phone */}
            <RequiredField
              isValid={verifyFieldPhone(formValues.phone)}
              text="Insira seu telefone para contato!"
            />
            <FloatingLabel label="Telefone: (99) 9999-9999" className="mb-3">
              <BootstrapForm.Control
                type="tel"
                placeholder="Phone"
                value={formValues.phone}
                name="phone"
                autoComplete="on"
                onChange={(e) =>
                  setFormValues({ ...formValues, phone: phoneMask(e.target.value) })
                }
                required
              />
            </FloatingLabel>
            {/* input message */}
            <RequiredField
              isValid={verifyFieldMessage(formValues.message)}
              text="Insira uma mensagem!"
            />
            <FloatingLabel label="Deixe sua mensagem aqui." className="mb-3">
              <BootstrapForm.Control
                as="textarea"
                placeholder="Mensagem"
                style={{ height: '100px' }}
                value={formValues.message}
                name="message"
                autoComplete="off"
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                required
              />
            </FloatingLabel>
          </>
          {/* input checkbox */}
          <RequiredField
            isValid={verifyFieldCheckbox(formValues.checkbox)}
            text="Você precisa aceitar para enviar!"
          />
          <BootstrapForm.Check
            label="Aceito enviar meus dados"
            className="mb-3"
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
        <p>{TEXT}</p>
        <SocialLinkContactsContainer>
          <SocialLinkContacts href={URL_MAIL_FORMATED}>
            <SocialIconContacts className="bx bxs-envelope" /> E-mail
          </SocialLinkContacts>
          <SocialLinkContacts href={URL_INSTAGRAM} target="_blank" rel="noreferrer">
            <SocialIconContacts className="bx bxl-instagram" /> Instagram
          </SocialLinkContacts>
          <SocialLinkContacts href={URL_FACEBOOK} target="_blank" rel="noreferrer">
            <SocialIconContacts className="bx bxl-facebook-circle" /> Facebook
          </SocialLinkContacts>
          <SocialLinkContacts href={URL_LINKEDIN} target="_blank" rel="noreferrer">
            <SocialIconContacts className="bx bxl-linkedin" /> Linkedin
          </SocialLinkContacts>
        </SocialLinkContactsContainer>
      </ContainerSpeak>
    </Container>
  );
}

export default Form;
