import { Fragment } from 'react'
import { Box, Typography } from "@mui/material"
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
    return (
        <Fragment>
            <Box component={"footer"} height={"15vh"} bgcolor={"#d14d72"} gap={0.4} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                <Typography color={"white"} display={"flex"} alignItems={"center"} gap={0.6}>
                    <CopyrightIcon />
                    All Rights Reserved To Idle Coders
                </Typography>
                <Typography color={"white"}>
                    Developed by shuvo sarker
                </Typography>
            </Box>
        </Fragment>
    )
}

export default Footer