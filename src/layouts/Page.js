import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import invariant from 'invariant';
import { BodyContainer, joinUri } from 'phenomic';



import styles from './Page.scss';

const Page = ({ isLoading, __filename, __url, head, body, header, footer, children }) => {
  invariant(
    typeof head.title === 'string',
    `Your page '${ __filename }' needs a title`
  );
  
  console.log('KEEGAN: children', children);

  let metaTitle = head.metaTitle ? head.metaTitle : head.title;
  metaTitle = 'Keegan Lillo - Web Developer' + (metaTitle && ` - ${metaTitle}`);

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    { property: 'og:url', content: joinUri(process.env.PHENOMIC_USER_URL, __url) },
    { property: 'og:description', content: head.description },
    { name: 'description', content: head.description },
  ];

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      {
        head.title && <h1 className={ styles.heading }>{ head.title }</h1>
      }
      { header }
      <BodyContainer>{ body }</BodyContainer>
      { children }
      { footer }
    </div>
  );
};

Page.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Page;
