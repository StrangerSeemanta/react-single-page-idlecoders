import { Fragment } from "react"
import { Box, Container, Stack, Typography } from "@mui/material"
import Background from "./../assets/background.jpg"
import AboutAnimeData from "./../assets/AboutAnime.json"
import Lottie from "lottie-react"
function About() {
    return (
        <Fragment>
            <Box minHeight={"90vh"} sx={{
                background: `url(${Background})`,
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <Container sx={{ py: 2 }}>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        width={"100%"}
                        minHeight={"90vh"}
                        justifyContent={{ xs: "center", sm: "space-between" }}
                        alignItems={"center"}
                    >
                        <Box width={{ xs: "100%", sm: "55%" }}>
                            <Lottie animationData={AboutAnimeData} />

                        </Box>
                        <Box width={{ xs: "100%", sm: "40%" }}>
                            <Typography color={"yellow"} fontSize={{ sm: "3.5rem", md: "5rem" }} fontWeight={700}>
                                About Us
                            </Typography>
                            <Typography color={"white"} fontSize={{ sm: "0.8rem", md: "1rem" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae odio officiis maxime quam voluptatibus obcaecati similique quod distinctio culpa!
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Fragment>
    )
}

export default About