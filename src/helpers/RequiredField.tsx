import React from 'react';

interface Props {
  isValid: boolean;
  text?: string;
}

function RequiredField({ isValid, text }: Props) {
  return !isValid ? <p className="required-field">{text}</p> : null;
}

RequiredField.defaultProps = {
  text: 'Campo obrigatório!'
};

export default RequiredField;
