import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Post from 'src/components/Post';
import PostsStyled from './PostsStyled';

const Posts = ({
  list,
  authorId,
}) => {
  const threadUser = [];
  for (const thread of list) {
    if (authorId == thread.author) {
      threadUser.push(thread);
    }
  };
  const postsElement = useRef(null);
  useEffect(() => {
    postsElement.current.scrollTop = postsElement.current.scrollHeight;
  }, []);
  return (
    <PostsStyled ref={postsElement}>
      <h1>MES SUJETS</h1>
        {threadUser.map(thread => (
          <Post key={thread._id} {...thread} />
        ))}
    </PostsStyled>
  );
};

Posts.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  authorId: PropTypes.string.isRequired,
};

export default Posts;
