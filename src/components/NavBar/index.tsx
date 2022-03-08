import React from 'react';

import {
    Box,
    Typography,
    AppBar,
    Toolbar,
} from '@mui/material';

import logo from '../../assets/MET-logo-white.png';

import './Navbar.css';

function NavBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
            >
                <Toolbar className={"nav"}>

                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '4vw'}}>
                        <img src={logo} id={"logo"}/>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Typography color="white" variant="h4" component="h4">
                            Collection & Room Builder
                        </Typography>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
