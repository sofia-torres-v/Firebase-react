import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Link,
  List,
  ListItem,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MAIN_COLORS } from "../../utils/constans";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  const toggleDrawer = useCallback((isOpen) => {
    setOpenDrawer(isOpen);
  }, []); // La dependencia vacía indica que toggleDrawer no cambia

  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth < 960;
    setIsMobile(newIsMobile);

    // Cerrar el menú cuando cambia al modo de escritorio
    if (!newIsMobile) {
      toggleDrawer(false);
    }
  }, [toggleDrawer]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: MAIN_COLORS.home_BG,
        px: 5,
        py:1,
      }}
    >
      <Typography variant="h6">Online Store</Typography>

      {/* Menú hamburguesa para dispositivos móviles */}
      {isMobile && (
        <IconButton onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      )}

      {/* Lista de enlaces para dispositivos de escritorio */}
      {!isMobile && (
        <List sx={{ display: { xs: "none", md: "flex" }, gap: 2, }}>
          <ListItem>
            <Link component={RouterLink} to="/" color="inherit"  style={{ textDecoration: 'none' }}>
              <Typography variant="h6">Inicio</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/" color="inherit"  style={{ textDecoration: 'none' }}>
              <Typography variant="h6">Productos</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/login" color="inherit"  style={{ textDecoration: 'none' }}>
              <Typography variant="h6">Registrarme</Typography>
            </Link>
          </ListItem>
        </List>
      )}

      {/* Drawer (menú lateral) para dispositivos móviles */}
      <Drawer 
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        
        sx={{
          width: '40vw', // Ancho del Drawer en dispositivos móviles
          '& .MuiDrawer-paper': {
            width: '40vw', 
            alignItems: 'center',
           
          },
        }}
        
      >
        <IconButton onClick={() => toggleDrawer(false)} sx={{ alignSelf: "flex-end"}}>
          <CloseIcon />
        </IconButton>
        <List>
          <ListItem>
            <Link component={RouterLink} to="/" color="inherit" style={{ textDecoration: 'none' }} >
              <Typography variant="h6">Inicio</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/" color="inherit" style={{ textDecoration: 'none' }}>
              <Typography variant="h6">Productos</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/login" color="inherit" style={{ textDecoration: 'none' }}>
              <Typography variant="h6">Registrarme</Typography>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
