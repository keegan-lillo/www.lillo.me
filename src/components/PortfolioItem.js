import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PortfolioItem = ({ __url, title }) => (
  <Link to={ __url }>
    { title }
  </Link>
);

PortfolioItem.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PortfolioItem;
