import React from 'react';
import PropTypes from 'prop-types';
import { Layout, HeadingXL, HeaderLogo } from '../components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Microblog = (props) => {
  return (
    <div>
      <HeaderLogo />
      <Layout>
        <HeadingXL>The Microblog</HeadingXL>
        <p>
          My Tweets are where I list some of my top-of-mind thoughts (for now),
          when I don't write full length musings.
        </p>
        <TwitterTimelineEmbed sourceType="profile" screenName="saaliklok" />
      </Layout>
    </div>
  );
};

Microblog.propTypes = {};

export default Microblog;
