import React from 'react';

import Header from '@/shared/widgets/header/Header';
import Banner from './elements/Banner';
import Branding from './elements/Branding';
import Benefits from './elements/benefits';
import FeatureHighlight from './elements/FeatureHighlight';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            <FeatureHighlight />
        </div>
    );
}

export default Home;
