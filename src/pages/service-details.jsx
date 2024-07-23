import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import ServiceDetails from '../components/service-details';
import AboutArea from '../components/homes/home-3/about-area';
import CounterArea from '../components/homes/home-2/counter-area';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Service Details"} />
            <br />
            
            <ServiceDetails />
        </Wrapper>
    );
};

export default index;