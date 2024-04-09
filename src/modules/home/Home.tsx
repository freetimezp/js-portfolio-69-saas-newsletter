import React from 'react';

import Header from '@/shared/widgets/header/Header';
import Banner from './elements/Banner';
import Branding from './elements/Branding';
import Benefits from './elements/benefits';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
        </div>
    );
}

export default Home;
