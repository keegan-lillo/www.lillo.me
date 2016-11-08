import React from 'react';
import TopBarProgressIndicator from 'react-topbar-progress-indicator';

import styles from './Loading.scss';

TopBarProgressIndicator.config({
  barColors: {
    '0': '#000',
    '1.0': '#000',
  },
  shadowBlur: 5,
});

const Loading = () => (
  <div>
    <TopBarProgressIndicator />
    <div className={ styles.loader }>
      <div className={ styles.spinner } />
    </div>
  </div>
);

export default Loading;
