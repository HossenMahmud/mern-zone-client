import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container notFound-bg text-center">
            <div className='backlink'>
                <Link to='/'>Bact To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;