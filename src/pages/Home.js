import React from 'react';
// React Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Emotion
import { Global, css } from '@emotion/core';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import styled from '@emotion/styled'
// Pages
import Resume from './Resume';
import About from './About';
import Projects from './Projects';

// Emotion styled components
let Name = styled.h1({
  fontFamily: 'Fredoka One, regular',
  letterSpacing: '6.25px',
  color: '#A84F00',
});

let List = styled.ul({
  textDecoration: 'none',
  listStyle: 'none',
});

const navItem = css`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 4.17px;
  cursor: crosshair;

  a {
    text-decoration: none;
    color: #170001;
  }
`;

function Home() {
  return (
    <div className="home">
      <Global
        styles={{
            '.body-color': {
                backgroundColor: '#F28705',
            }
        }}
      />
      <Name>natasha</Name>
      <Name>thapliyal</Name>
      <nav>
        <List>
          <li css={navItem}>
            <Link to="/resume">Resumé</Link>
          </li>
          <li css={navItem}>
            <Link to="/about">About</Link>
          </li>
          <li css={navItem}>
            <Link to="/projects">Projects</Link>
          </li>
        </List>
      </nav>
    </div>
  );
}

export default Home;
