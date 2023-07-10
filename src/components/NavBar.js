import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import CronoLogo from '../Group 19.png';
import Cronologis from '../Group 20.png';
import { Link } from '@mui/material';
const pages = ['Products', 'Pricing', 'Blog'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={ {background:'#071829'}}>
        <Toolbar disableGutters>
          {/* BOX MOBILE BAR */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          
            <img src={CronoLogo} alt='logo' maxWidth={50}/>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>          
    
          {/* BOX LINK WEB PAGE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <img src={Cronologis} alt=''/>
          </Box>

          {/* BOX RIGHT SIDE */}
          <Box sx={{ flexGrow: 0,  }}>
              <Link href='/' sx={{color:'white', textDecoration: 'none'}}>
                Contacto
              </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;