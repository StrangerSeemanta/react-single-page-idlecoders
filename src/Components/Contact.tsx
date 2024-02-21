import { Box, Button, Container, Stack, TextField, Typography, } from "@mui/material"
import { Fragment } from "react"
import Background from "./../assets/background.jpg"
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '& label': {
                            color: '#fff',
                        },
                        '& label.Mui-focused': {
                            color: '#fff',
                        },
                        '& .MuiInputBase-input': {
                            color: "#fff"
                        }
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderHoverColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

function Contact() {
    const InputTheme = useTheme();
    return (
        <Fragment>
            <Box minHeight={"90vh"} sx={{
                background: `url(${Background})`,
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <Container sx={{ py: 2, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                    <Typography color={"white"} width={"100%"} textAlign={"center"} fontSize={{ xs: "3rem", sm: "4.3rem", md: "6rem" }} textTransform={"capitalize"} fontWeight={600}>
                        Contact Us
                    </Typography>

                    <Box component={"div"} className="Form_holder" width={"40%"}>
                        <ThemeProvider theme={customTheme(InputTheme)}>
                            <Stack spacing={2} component={"form"} >
                                <TextField
                                    type="text"

                                    label="Full Name"
                                    placeholder="Write Your Name"
                                    name="fname" required
                                />
                                <TextField
                                    type="email"

                                    label="Email ID"
                                    placeholder="Write Your Valid Email"
                                    name="email"
                                    required
                                />
                                <TextField
                                    type="text"
                                    multiline
                                    label="Message"
                                    placeholder="Write Your Message"
                                    name="msg" required
                                />
                                <Button
                                    type="submit"
                                    sx={{ gap: 1 }}
                                    variant="contained"
                                    color="warning"
                                >
                                    <span>Send</span>
                                    <SendIcon />

                                </Button>
                            </Stack>
                        </ThemeProvider>

                    </Box>

                </Container>
            </Box>
        </Fragment>
    )
}

export default Contact