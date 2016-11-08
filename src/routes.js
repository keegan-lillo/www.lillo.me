import React from 'react';
import { Route } from 'react-router';
import { PageContainer } from 'phenomic';

import AppContainer from './AppContainer';
import PageError from './layouts/PageError';

import AnimationContainer from './layouts/AnimationContainer';

const PageContainerWrapper = (props) => (
  <PageContainer
    { ...props }
    defaultLayout={'AnimationContainer'}
    layouts={{
      PageError,
      AnimationContainer,
    }}
  />
);

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainerWrapper } />
  </Route>
);
