import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
    const plansArray = data.plansAPI.getPlans;
    return (
        <Layout>
            <SEO title="Home" />
            <h1>medicare</h1>
            <p>
                This is a Gatsby site serving up a homegrown, local Node server.
                You can buy real health insurance here.
            </p>
            <p>
                Here are you plans available to you personally, selected by our algorithm that reads your browser settings:
            </p>
            {plansArray.map(p => {
                return (
                    <React.Fragment>
                        <h2>{p.name}</h2>
                        <h4>average cost: ${p.cost}/month</h4>
                        <ul>
                            {Object.keys(p.coverage).map(item => {
                                return (
                                    <li>
                                        Covers thing <b>{item.toUpperCase()}</b>
                                        ?<br />
                                        <i>
                                            {p.coverage[item]
                                                ? 'sure does'
                                                : 'lol nah dude'}
                                        </i>
                                    </li>
                                );
                            })}
                        </ul>
                    </React.Fragment>
                );
            })}
            <footer>
                <Link to="/page-2/">Go to page 2</Link>
            </footer>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    {
        plansAPI {
            getPlans(ids: [1, 2]) {
                name
                cost
                coverage {
                    a
                    b
                    c
                }
            }
        }
    }
`;
