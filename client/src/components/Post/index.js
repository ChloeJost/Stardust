import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getUrlByThreadTitle } from 'src/selectors';
import PostStyled from './PostStyled';

const Post = ({ title }) => (
  <PostStyled>
    <Link className="show-thread" to={getUrlByThreadTitle(title)}>{title}</Link>
  </PostStyled>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Post;
