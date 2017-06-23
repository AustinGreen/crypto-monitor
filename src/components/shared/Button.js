import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Button = styled.a`

  ${props =>
    props.uppercase &&
    css`
    text-transform: uppercase;
  `}
`;
