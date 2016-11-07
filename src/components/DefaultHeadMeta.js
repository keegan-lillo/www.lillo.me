import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={[
        { name: 'generator', content: `${ process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }` },
        { property: 'og:site_name', content: pkg.name },
        // { name: 'twitter:site', content: `@${ pkg.twitter }` },
      ]}

      script={[
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' },
      ]}

      link={[
        { href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:600', rel: 'stylesheet' },
      ]}
    />
  </div>
);

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default DefaultHeadMeta;
