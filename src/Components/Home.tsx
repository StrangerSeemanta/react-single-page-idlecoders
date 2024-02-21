import { Fragment } from "react"
import { Box, Typography, Container } from "@mui/material"
import Background from "./../assets/background.jpg"
function Home() {
    return (
        <Fragment>
            <Box height={"90vh"} sx={{
                background: `url(${Background})`,
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <Container sx={{ py: 2 }}>
                    <Typography color={"white"} width={"70%"} fontSize={{ xs: "3rem", sm: "4.3rem", md: "6rem" }} textTransform={"capitalize"} fontWeight={600}>
                        Welcome To <span style={{ color: "dodgerblue" }}>idle coders</span> community...
                    </Typography>
                </Container>
            </Box>
        </Fragment>
    )
}

export default Home