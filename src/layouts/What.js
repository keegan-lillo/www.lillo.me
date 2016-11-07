import React, { PropTypes } from 'react';
import Page from './Page';
import enhanceCollection from 'phenomic/lib/enhance-collection';
import PortfolioList from '../components/PortfolioList.js';

const What = (props, { collection }) => {
  const portfolioItems = enhanceCollection(collection, {
    filter: { layout: 'Portfolio' },
    sort: 'order',
  });

  return (
    <Page { ...props }>
      <PortfolioList items={ portfolioItems }/>
    </Page>
  );
};

What.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default What;
