import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Link } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [['For companies', 'Session1'], ['For workers', 'Session2'], ['About us', 'Session3'], ['Contact', 'contact']];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = async() => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleDrawer = async() => {
    setMobileOpen(false);
  };

  const scrollTo = async (ev: any, loc: string) => {
    ev.preventDefault();
    await handleDrawer()
    document.getElementById(loc)!.scrollIntoView({
      behavior: 'smooth'
    });

    
  }

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]}  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={(ev) => scrollTo(ev, item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid sx={{ display: 'flex'  }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{bgcolor: 'white', color: 'black', fontWeight: 600, fontSize: 15}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
          >

            <Grid item >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block', md: 'block' } }}
              >
                BUILD
              </Typography>
            </Grid>
            
            <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block'} }}>
              {navItems.map((item) => (
                <Link key={item[0]} href='#' onClick={(ev) => scrollTo(ev, item[1])} underline="none" sx={{marginX: 1, '&:hover': {
                  color: '#CCC',
                }}}>
                  {item[0]}
                </Link>
              ))}
            </Grid>

            <Grid item sx={{ display: { xs: 'none', sm: 'block', md: 'block'} }}>
             
                <Button sx={{ marginX: 1 }} color='warning' endIcon={<SendIcon />}>
                  Hire Works
                </Button>
                <Button sx={{ marginX: 1 }} variant='outlined' color='warning'>
                  Find Work
                </Button>
             
            </Grid>

          </Grid>
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Grid>
  );
}