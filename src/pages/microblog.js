import React from 'react';
import { Layout, HeadingXL, HeaderLogo } from '../components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Microblog = () => {
  return (
    <div>
      <HeaderLogo />
      <Layout>
        <HeadingXL>The Microblog</HeadingXL>
        <p>My Tweets are where I list some of my top-of-mind thoughts.</p>
        <TwitterTimelineEmbed sourceType="profile" screenName="saaliklok" />
      </Layout>
    </div>
  );
};

Microblog.propTypes = {};

export default Microblog;
