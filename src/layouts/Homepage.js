import React from 'react';
import Page from './Page';

const Homepage = (props) => (
  <Page { ...props }>
    <h2>Hello World</h2>
  </Page>
);

Homepage.contextTypes = {};

export default Homepage;
