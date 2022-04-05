import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ color, isFullwidth, className, handleClick, children }) => {
  return (
    <button type='submit' className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.colors.darkBlue};
  color: ${props =>
    props.color === 'warning'
      ? props.theme.colors.dark
      : props.theme.colors.white};
  padding: 0.75rem 1.25rem;
  margin: ${props => props.theme.sizings.large};
  border-radius: ${props => props.theme.radius.medium};
  font-size: ${props => props.theme.fontSizes.default};
  font-family: ${props => props.theme.fonts.default};
  border: 1px solid ${props => props.theme.colors.white};
  width: ${props => props.isFullwidth && '100%'};
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.linkDark};
  }
`;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  isFullwidth: PropTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  isFullwidth: false,
};

export default StyledButton;
