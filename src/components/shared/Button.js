import styled, { css } from 'styled-components';

export default styled.a`
  ${props =>
    props.uppercase &&
    css`
    text-transform: uppercase;
  `};
`;
