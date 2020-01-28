import React from 'react';
import { Global, css } from '@emotion/core';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import styled from '@emotion/styled'

const header = css`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 4.17px;
`;

function About() {
  return (
    <div className="about">
      <Global
        styles={{
            '.body-color': {
                backgroundColor: '#F2BBBF',
            }
        }}
      />
      <h2 css={header}>About</h2>
    </div>
  );
}

export default About;
