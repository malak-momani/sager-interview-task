import React from "react";
import { Box, Divider, Typography } from '@mui/material';
import { ReactComponent as Logo } from '../../../assests/logo.svg';
import NavTop from "../../NavBar";
import AccountItem from "../../AccountItem/AccountItem";

const Header = () => {

    return (
        <Box
            sx={{
                padding: 1.5,
                height: "72.06672668457031 px",
                bgcolor: '#0B0B0B',
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

            }}
        >
            <Box sx={{ flex: 1 }}>
                <Logo />
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'right',
                }}>

                <NavTop />
                <Divider orientation="vertical" variant="middle" flexItem sx={{color: 'white'}} />

                <AccountItem />
            </Box>


        </Box>

    )


}

export default Header;