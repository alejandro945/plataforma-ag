import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import LabelRequired from './LabelRequired';

 const Currency = (props) => {
  const limit = 908526;
  const prefix = '$';
  const [errorMessage, setErrorMessage] = useState('');
  const [className, setClassName] = useState('');

  const validateValue = (value) => {
    if (!value) {
      setClassName('');
    } else if (Number.isNaN(Number(value))) {
      setErrorMessage('Numero invalido');
      setClassName('is-invalid');
    } else if (Number(value) < limit) {
      setErrorMessage(`Salario minimo es: ${prefix}${limit}`);
      setClassName('is-invalid');
    } else {
      setClassName('is-valid');
    }
    props.handleChange({ target: { name: props.name, value: value } })
  };

  return (
    <div className="col">
      <LabelRequired name={props.message} />
      <CurrencyInput
        id="validation-example-2-field"
        allowDecimals={false}
        className={`form-control ${className}`}
        value={props.value}
        onValueChange={validateValue}
        prefix={'$'}
        step={10}
        required
      />
      <div className="invalid-feedback">{errorMessage}</div>
    </div>
  );
};

export default Currency;