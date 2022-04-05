// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import FieldStyled from './FieldStyled';

// == Composant
const Field = ({ value, type, name, placeholder, onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <FieldStyled>
      <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
        <textarea
          // React - state
          rows='5'
          value={value}
          onChange={handleChange}
          // infos de base
          id={inputId}
          type={type}
          className='field-input'
          placeholder={placeholder}
          name={name}
        />

        <label htmlFor={inputId} className='field-label'>
          {placeholder}
        </label>
      </div>
    </FieldStyled>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
