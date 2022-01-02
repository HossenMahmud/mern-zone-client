import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return (
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    }

    if (user?.email && admin) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />;
    }

};

export default AdminRoute;