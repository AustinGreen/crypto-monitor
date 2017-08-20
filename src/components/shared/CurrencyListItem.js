import styled, { css } from 'styled-components';

export default styled.p`
  margin-bottom: 0.5em;

  &:before {
    content: '';
    display: inline-block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    margin-right: 10px;

    ${props =>
      props.name === 'BTC' &&
      css`
      background-color: #FF9900;
    `} ${props =>
        props.name === 'ETH' &&
        css`
      background-color: #3C3C3D;
    `} ${props =>
        props.name === 'LTC' &&
        css`
      background-color: #989898;
    `} ${props =>
        props.name === 'ZEC' &&
        css`
      background-color: #EEAC57;
    `} ${props =>
        props.name === 'ETC' &&
        css`
      background-color: #53B75C;
    `} ${props =>
        props.name === 'XMR' &&
        css`
      background-color: #CD4A17;
    `} ${props =>
        props.name === 'BCH' &&
        css`
      background-color: #1CAADE;
    `};
  }
`;
