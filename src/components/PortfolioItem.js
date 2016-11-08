import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './PortfolioItem.scss';

const PortfolioItem = ({ __url, title, images = [] }) => (
  <Link to={ __url }>
    { title }
    <div
      className={ styles.thumbnail }
      style={{ ...images.length && { backgroundImage: `url(/assets/images/portfolio/thumbs/${images[0]})` } }}>
    </div>
  </Link>
);

PortfolioItem.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array,
};

export default PortfolioItem;
