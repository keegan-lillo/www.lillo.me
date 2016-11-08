import React, { PropTypes } from 'react';

import PortfolioItem from './PortfolioItem';

import styles from './PortfolioList.scss';

const PortfolioList = ({ items }) => (
  <div>
    {
      items.length && (
        <ul className={ styles.list }>
          {
            items.map(
              (item) => (
              <li key={ item.title }><PortfolioItem { ...item } /></li>
            )
            )
          }
        </ul>
      )
    }
  </div>
);

PortfolioList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PortfolioList;
