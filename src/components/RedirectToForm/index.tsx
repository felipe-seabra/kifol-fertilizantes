import React, { useEffect } from 'react';

interface RedirectToFormProps {
  url?: string;
}

function redirectToForm({ url = '' }: RedirectToFormProps): JSX.Element {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <h2>Redirecionando</h2>;
}

redirectToForm.defaultProps = {
  url: ''
};

export default redirectToForm;
