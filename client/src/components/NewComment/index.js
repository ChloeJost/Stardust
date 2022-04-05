import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import NewCommentStyled from './NewCommentStyled';
import Field from './Field';

const NewComment = ({ changeField, text, newComment, isLogged }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    newComment();
  };
  return (
    <NewCommentStyled>
      {isLogged && (
        <div>
          <Form onSubmit={handleSubmit}>
            <div className='comment'>
              <p>Ajouter un nouveau commentaire</p>
              <div className='message-text'>
                <Field
                  name='text'
                  placeholder='Ecrivez votre texte ici'
                  onChange={changeField}
                  value={text}
                />
              </div>
              <Button className='button-submit' type='submit'>
                ENVOYER
              </Button>
            </div>
          </Form>
        </div>
      )}
      {!isLogged && (
        <div className='not-logged-comment'>
          <p>
            {' '}
            Si vous souhaitez commenter ce sujet, merci de vous{' '}
            <Link to='/register'>inscrire</Link>
          </p>
          <p>
            Sinon <Link to='/'>connectez-vous</Link> !
          </p>
        </div>
      )}
    </NewCommentStyled>
  );
};

NewComment.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  newComment: PropTypes.func.isRequired,
};
export default NewComment;
