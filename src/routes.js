import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import AppContainer from './AppContainer';
import Page from './layouts/Page';
import PageError from './layouts/PageError';
import Homepage from './layouts/Homepage';
import Who from './layouts/Who';
import What from './layouts/What';
import Portfolio from './layouts/Portfolio';

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Who,
      What,
      Portfolio,
    }}
  />
);

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
);
