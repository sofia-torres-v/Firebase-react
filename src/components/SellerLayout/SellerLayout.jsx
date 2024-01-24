// import * as React from 'react';
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { MAIN_COLORS } from "../../utils/constans";


const drawerWidth = 240;

const SellerLayout = (props) => {
    const navigate = useNavigate();
    const navLinks = [
        {
            LinkName: "Mis productos",
            LinkIcon: <InventoryIcon sx={ {color: 'white'}}/> ,
            LinkAction: () => navigate("/Products"),
        },
        {
            LinkName: "Agregar productos",
            LinkIcon: <AddToPhotosIcon sx={ {color: 'white'}}/>,
            LinkAction: () => navigate("/addProducts"),
        },

        {
            LinkName: "Salir",
            LinkIcon: <LogoutIcon sx={ {color: 'white'}}/>,
            LinkAction: "#",
        },
    ];

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            >
                <Toolbar sx={{backgroundColor:MAIN_COLORS.seller_BG}}>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        backgroundColor: MAIN_COLORS.seller_BG,
                        color: 'white',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />

                <List>
                    {navLinks.map((item, index) => (
                            <ListItem
                                key={index}
                                disablePadding onClick={item.LinkAction}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.LinkIcon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.LinkName} />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
                <Toolbar />
               {props.children}
            </Box>
        </Box>
    );
};
SellerLayout.propTypes = {
    children: PropTypes.node,
    // Agrega otras propiedades si las tienes
  };

export default SellerLayout;
