import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;