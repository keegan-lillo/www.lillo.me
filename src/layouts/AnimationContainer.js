import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Page from './Page';
import Loading from '../components/Loading';

import Homepage from './Homepage';
import Who from './Who';
import What from './What';
import Portfolio from './Portfolio';

import styles from './AnimationContainer.scss';

const components = {
  Homepage,
  Who,
  What,
  Portfolio,
};

const AnimationContainer = (props) => {

  console.log('KEEGAN: AnimationContainer props', props);

  const component = props.isLoading ?
    <Loading /> :
    <Page { ...props }>
      { props.head && React.createElement(components[props.head.component]) }
    </Page>;

  return (
    <ReactCSSTransitionGroup
      component="div"
      transitionEnterTimeout={ 500 }
      transitionLeaveTimeout={ 500 }
      transitionName={ {
        enter: styles.enter,
        enterActive: styles.enterActive,
        leave: styles.leave,
        leaveActive: styles.leaveActive,
        appear: styles.appear,
        appearActive: styles.appearActive,
      } }
    >
      {
        React.cloneElement(
          component,
          { key: props.__url }
        )
      }
    </ReactCSSTransitionGroup>
  );
};

AnimationContainer.propTypes = {
  children: PropTypes.node,
};

export default AnimationContainer;
