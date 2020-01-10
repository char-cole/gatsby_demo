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
                Here are you plans available to you personally, selected by our
                algorithm that reads your browser settings:
            </p>
            {plansArray.map(p => {
                return (
                    <React.Fragment>
                        <h2>
                            Plan&nbsp;
                            {p.id.length === 1
                                ? p.id
                                : p.id[0] + ' High Deductible'}
                        </h2>
                        <ul>
                            {Object.keys(p).map((item, indx) => {
                                if (item === 'id' || indx > 5) return null;
                                return (
                                    <li>
                                        <h5 style={{ margin: '0px' }}>
                                            {item.toUpperCase()}
                                        </h5>
                                        <div>{p[item]}</div>
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
            getPlans(ids: ["a", "b", "g", "gh"]) {
                id
                primaryDoctor
                specialist
                emergencyRoom
                labXRay
                outpatientSurgery
                hospitalization
                outpatient
                periodicExamCoverage
                outOfPocketLimit
                prescriptionDrugCoverage
                ambulanceServices
                urgentCare
                skilledNursingFacility
                homeHealthCare
                hospice
                dentalServices
                hearingServices
                visionServices
                primaryOfficeVisit
                specialistOfficeVisit
            }
        }
    }
`;
