import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.a`

  ${props =>
    props.uppercase &&
    css`
    text-transform: uppercase;
  `}
`;
