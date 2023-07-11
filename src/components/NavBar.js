import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Cronologis from '../Cronologis.svg';
import { Link } from '@mui/material';

function NavBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: '#071829' }}>
        <Toolbar disableGutters>
          {/* BOX MOBILE BAR */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <img src={Cronologis} alt='logo' maxWidth={50} />

          </Box>

          {/* BOX LINK WEB PAGE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <img src={Cronologis} alt='' />
          </Box>

          {/* BOX RIGHT SIDE */}
          <Box sx={{ flexGrow: 0, }}>
            <Link href='/' sx={{ color: 'white', textDecoration: 'none' }}>
              Contacto
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;