import React from 'react';
import { Link } from 'react-router-dom';
import DashboardContent from '../../dashboardLayout';

const index = (props) => {
    return (
        <DashboardContent >
            <p>Home</p>
            <Link to="/users">uesrs</Link>
        </DashboardContent>
    );
}

export default index;