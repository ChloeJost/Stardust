import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import NewThreadStyled from './NewThreadStyled';
import Field from './Field';

import Button from 'src/components/Button';

const NewThread = ({ changeField, title, newThread }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    newThread();
  };
  return (
    <NewThreadStyled>
      <div>
        <Form onSubmit={handleSubmit}>
          <div className='new-thread'>
            <h3>Nouveau sujet</h3>
            <Field
              className='field-newthread'
              name='title'
              placeholder='Sujet...'
              onChange={changeField}
              value={title}
            />
            <Button className='button-submit' type='submit'>
              ENVOYER
            </Button>
          </div>
        </Form>
      </div>
    </NewThreadStyled>
  );
};

NewThread.propTypes = {
  title: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  newThread: PropTypes.func.isRequired,
};
export default NewThread;
