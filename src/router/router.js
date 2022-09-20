
import Home from '../layouts/Home';
import Users from '../layouts/Users';
import Facultyes from '../layouts/Facultyes';
 import Login from '../layouts/Login';

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
const routes = [
    {
    // type: "collapse",
    name: "Dashboard",
    // key: "dashboard",
    // icon: <DashboardIcon />,
    path: "/",
    element: <Home />
    },
    , {
        path: "/users",
        // type: "collapse",
        name: "Users",
        // key: "dashboard",
        element: <Users />,
        // icon: <GroupOutlinedIcon />,
    },
    {
        path: "/faces",
        // type: "collapse",
        name: "Fuces",
        // key: "dashboard",
        element: <Facultyes />,
        // icon: <GroupOutlinedIcon />,
    },
    {
        path: "/login",
        // type: "collapse",
        // name: "Dashboard",
        // key: "dashboard",
        element: <Login />,
        // icon: <GroupOutlinedIcon />,
    },
]


export default routes