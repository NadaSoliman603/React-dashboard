import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './components/listItems';
import Copyright from './components/Copyright';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import { setDirection, useMaterialUIController } from '../context';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import LanguageIcon from '@mui/icons-material/Language';
import ListItemText from '@mui/material/ListItemText';
import { Collapse } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import ListItemLink from './components/ListItemLink';
import routes from './../router/router';
const mdTheme = createTheme();

function DashboardContent({ children }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [controller, dispatch] = useMaterialUIController()
  const { direction } = controller

  React.useEffect(() => {
    console.log(direction)
    document.body.setAttribute("dir", direction);
  }, [direction]);

  const togilLanguage = () => {
    const newDir = direction === "rtl" ? "ltr" : "rtl"
    setDirection(dispatch, newDir)
  }

  const [openColaps, setOpenColaps] = React.useState(true);

  const handleClick = () => {
    setOpenColaps(!openColaps);
  };

  const toolBarStyle = {
    zIndex: 1000,
    width: "240px",
    height: "64px",
    position: "fixed",
    top: "0px",
    backgroundColor: "#fff"
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>

          <AppBar direction={direction} position="fixed" open={open}>
            <Toolbar

              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginX: '20px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />


              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>



          </AppBar>


          <Toolbar
            style={toolBarStyle}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>

          <Divider />

          <List component="nav">
            
            {routes.map(item=> <ListItemLink title={item.name} to={item.path} />)}





            <ListItemButton onClick={togilLanguage}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={direction === "ltr" ? "Ar" : "En"} />
            </ListItemButton>


          </List>




        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DashboardContent

// export default App;
