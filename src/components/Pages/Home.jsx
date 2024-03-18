import React from 'react';
import Banner1 from '../Common/Banner1';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
<div>
<Helmet>
        <title>Page Title</title>
        <meta name="description" content="Description of the page" />
</Helmet>
      <Banner1></Banner1>
</div>
        

    );
};

export default Home;