import styled, { css } from 'styled-components';

export default styled.input`
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  -ms-flex-pack: start;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  max-width: 100%;
  width: 100%;
  outline: 0;

  ${props =>
    props.white &&
    css`
    color: white;
    border-bottom: 3px solid white;
  `};
`;
