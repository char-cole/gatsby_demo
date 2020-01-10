import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
    <Layout>
        <SEO title="Page two" />
        <h1>get out of here</h1>
        <p>there ain't nothin' here for ya... yet ;)</p>
        <footer>
            <Link to="/">Go back to the homepage</Link>
        </footer>
    </Layout>
);

export default SecondPage;
