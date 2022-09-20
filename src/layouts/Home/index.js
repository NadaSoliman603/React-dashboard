import React from 'react';
import { Link } from 'react-router-dom';
import DashboardContent from '../../dashboardLayout';

const index = (props) => {
    return (
        <DashboardContent >
            <p>Home</p>
            <Link to="/users">uesrs</Link>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        </DashboardContent>
    );
}

export default index;