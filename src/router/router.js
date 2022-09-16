
import Home from '../layouts/Home';
import Users from '../layouts/Users';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
const routes = [
    {
    // type: "collapse",
    // name: "Dashboard",
    // key: "dashboard",
    // icon: <DashboardIcon />,
    path: "/",
    element: <Home />
    },
    , {
        path: "/users",
        // type: "collapse",
        // name: "Dashboard",
        // key: "dashboard",
        element: <Users />,
        // icon: <GroupOutlinedIcon />,
    }
]


export default routes