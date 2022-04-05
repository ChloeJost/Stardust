import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Comments from 'src/containers/Comments';
import NewComment from 'src/containers/NewComment';
import ThreadWithCommentsStyled from './ThreadWithCommentsStyled';

import Button from 'src/components/Button';

const ThreadWithComments = ({ list, currentThread }) => {
  console.log(list);
  console.log(currentThread);
  const theGoodThread = list.find((thread) => thread._id === currentThread);
  console.log(theGoodThread);
  // console.log(theGoodThread.title);
  // console.log(theGoodThread.name);

  const comments = theGoodThread.comments;
  console.log(comments);

  // const allTextComments = comments.map(comment => comment.text);
  // console.log(allTextComments);

  // const history = useHistory();

  // function routeChange() {
  //   let path = '/forum';
  //   history.push(path);
  // }

  return (
    <ThreadWithCommentsStyled>
      <section className='content-section'>
        <div className='go-back-button'>
          <Button color='primary'>
            <Link to='/forum'>Retour aux sujets</Link>
          </Button>
        </div>
      </section>
      <section className='comments-section'>
        <div className='content'>
          <h2>{theGoodThread.title}</h2>
          <p>publié par {theGoodThread.name}</p>
        </div>
        <div className='posts'>
          <h3>Commentaires</h3>
          {comments.map((comment) => (
            <Comments key={comment._id} {...comment} />
          ))}
        </div>
        <div className='form-comments'>
          <NewComment />
        </div>
      </section>
    </ThreadWithCommentsStyled>
  );
};

ThreadWithComments.propTypes = {
  currentThread: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ThreadWithComments;
