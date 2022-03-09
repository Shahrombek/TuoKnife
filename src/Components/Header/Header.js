import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logo from "../../Assets/Images/logo.png";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {FaShoppingCart} from "react-icons/fa";
import {useEffect, useState} from "react";

const drawerWidth = 280;

const Main = styled("main", {shouldForwardProp: (prop) => prop !== "open"})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function Header() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [scroll, setScroll] = useState(window.scrollY > 80);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 80) {
                setScroll(true);
            } else setScroll(false);
        };
    }, []);

    return (
        <>
            <CssBaseline/>
            <AppBar position="fixed" open={open} >
                <Toolbar>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <img style={{cursor: 'pointer'}} onClick={() => navigate('/')} src={logo} alt="logo"/>
                        <Box>
                            
                            <Button sx={{minWidth: '20px', color: 'white',mr:"10px",p:"10px", border:"1px solid red", fontSize: {xs: '12px', sm: '15px'}}}
                                    color="error"
                                    onClick={() => navigate('/basket')}>
                                <FaShoppingCart/>
                            </Button>
                            <Button sx={{color: 'white', border: '1px solid red', fontSize: {xs: '12px', sm: '15px'}}}
                                    color="error"
                                    variant='outlined'
                                    onClick={() => navigate('/map')}>
                                наш адрес
                            </Button>

                        </Box>


                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon/>
                        ) : (
                            <ChevronRightIcon/>
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                logo
            </Drawer>
        </>
    );
}
