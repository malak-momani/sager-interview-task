import React from "react";
import { Box, Typography } from '@mui/material';
import { ReactComponent as Logo } from '../../../assests/logo.svg';

const Header = () => {

    return (
        <Box
            sx={{
                padding: 1.5,
                height: 50,
                bgcolor: 'primary.main',
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

            }}
        >
            <Logo />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <p style={{ color: "white", margin: "10px" }}> nav </p>
                <p style={{ color: "white", margin: "10px" }}> profile </p>
            </Box>


        </Box>

    )


}

export default Header;