/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import vars from '../variables';

const AnswerButton = styled.button`
  display: inline-block;
  border: 1px solid ${vars.userBlobColor};
  padding: .5rem 1rem;
  font-weight: 200;
  color: #222;
  font-size: .8rem;
  background: none;
  border-radius: 1.5rem;
  transition: background 100ms;
  cursor: pointer;
  margin-right: .5rem;
  margin-bottom: 1rem;

  &:focus,
  &:hover {
    outline: 0;
    background: ${vars.userBlobColor};
    color: #fff;
  }
`;

export default AnswerButton;
