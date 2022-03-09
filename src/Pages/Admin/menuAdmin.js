import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styled from "styled-components";
import {Link, useLocation,} from 'react-router-dom'
import { useState} from "react";
import {BiNews,BiSpreadsheet,} from "react-icons/bi";


const drawerWidth = 240;

const StyleMenu = styled.div`
    
    .css-12i7wg6-MuiPaper-root-MuiDrawer-paper{
        background-color:#191919;
    }
`

;





export default function MenuAdmin(props) {
    const { children } = props;


    const [menu,setMenu]=useState(
        [
            {
                id:'admindelivery',
                text: 'Delivery',
                path: "admindelivery",
                icon:<BiNews />,
            },
            {
                id:'adminaddproduct',
                text: 'Add Product',
                path: "adminaddproduct",
                icon:<BiSpreadsheet />,
            },
            // {
            //     id:'reyting',
            //     text: 'Reyting',
            //     path: "reyting",
            //     icon:<FcStatistics />,
            // },
            // {
            //     id:'arxiv',
            //     text: 'Arxiv',
            //     path: "arxiv",
            //     icon:<SiArxiv />,
            // },
        ]
    );
    const pathname = useLocation().pathname;
    return (
        <StyleMenu>
            <Box sx={{ display: 'flex', }}>
                <CssBaseline />


                <Drawer
                    sx={{
                        width: drawerWidth,
                        zIndex:'0',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },

                    }}
                    variant="permanent"
                >
                    <Box sx={{height:'64px'}}>

                    </Box>


                    <List >
                            {menu.map((item, index) => (
                                <Link  key={index} to={`/admin/${item.path}`} >
                                    <ListItem
                                        button
                                        selected={
                                            pathname.startsWith(`/${item.path}`) &&
                                            pathname.length - 1 <= item.path.length
                                        }

                                    >
                                        <ListItemIcon  sx={{ color: "white",fontSize:'20px' }}>{item.icon}</ListItemIcon>
                                        <ListItemText  sx={{ color: "white",fontSize:'30px !important' }}> {item.text} </ListItemText>
                                    </ListItem>
                                </Link>
                            ))}
                    </List>

                </Drawer>
                <Box component="main"
                     sx={{ flexGrow: 1, p: 3 }}>
                    {children}
                </Box>

            </Box>
        </StyleMenu>
    );
}
