import React, { PropTypes } from 'react';

import styles from './Content.scss';

const Content = (props) => (
  <div className={ styles.content }>
    { props.children }
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
