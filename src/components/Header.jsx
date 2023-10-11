import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from "../assets/logo.png";


const pages = ['Inicio', 'Nosotros', 'Servicios', 'Portfolio', 'Contacto'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
          <Box sx={{ //PANTALLA GRANDE
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                justifyContent:"space-between"
          }}>
            <Box //LOGO PANTALLA GRANDE
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              mt={2}
            >
              <Box 
                  component="img"
                  src={logo}
                  sx={{
                      height: 60,
                      width: 180
                  }}
              />      
            </Box>

            <Box mt={5}>
              <Button variant="text" color="white"> Inicio </Button>
              <Button variant="text" color="white"> Nosotros </Button>
              <Button variant="text" color="white"> Servicios </Button>
              <Button variant="text" color="white"> Portfolio </Button>
              <Button variant="text" color="white"> Contacto </Button>
            </Box>
          </Box>

          <Box sx={{  //PANTALLA CHICA
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none' }, 
            justifyContent:"space-between"
          }}> 
            <Box >
              <IconButton //ICONO MENÚ RESPONSIVE
                size="large"             
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>
         
          <Box //LOGO PANTALLA CHICA
            component="img"
            src={logo}
            href="#app-bar-with-responsive-menu"
            sx={{
              height: 60,
              width: 180,
            }}
          />
          </Box>
  
      </Container>
    </AppBar>
  );
}
export default Header;