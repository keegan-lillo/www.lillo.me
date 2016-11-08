import React, { PropTypes } from 'react';
import enhanceCollection from 'phenomic/lib/enhance-collection';
import PortfolioList from '../components/PortfolioList.js';

const What = (props, { collection }) => {
  const portfolioItems = enhanceCollection(collection, {
    filter: { component: 'Portfolio' },
    sort: 'order',
  });

  return (
    <PortfolioList items={ portfolioItems }/>
  );
};

What.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default What;
