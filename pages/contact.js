import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import styles from "../styles/Home.module.css";
import Header from '../components/Header';
import GetInTouch from '../components/GetInTouch';

export default function ContactSection() {
    return (

        <ThemeProvider theme={theme}>
            <div className={styles.container}>
            <div className={styles.mainPage}>
                <Head>
                    <title>TenzenLabs</title>
                    <meta name="description" content="Design & Development team working with companies from 0 to IPO and beyond." />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.cdnfonts.com/css/satoshi"
                        rel="stylesheet"
                    />
                </Head>
                <Header></Header>
                <Box
                    sx={{
                        width: '100%',
                        // minHeight: '100vh',
                        display: 'flex',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        // background: 'black',
                        // padding: { xs: '2rem', md: '4rem' },
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            width: '100%',
                            maxWidth: '1200px',
                            background: 'transparent',
                            // padding: { xs: '2rem', md: '4rem' },
                            borderRadius: '10px',
                        }}
                    >
                        {/* Heading */}
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: { xs: '2.5rem', md: '5rem' },
                                lineHeight: 1.2,
                            }}
                        >
                            Let’s talk business.
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '2.5rem', md: '5rem' },
                                background: 'linear-gradient(90deg, #6a0dad, #ffffff)',
                                // background: 'linear-gradient(90deg, #6a0dad, #0078ff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '2rem',
                            }}
                        >
                            But you first.
                        </Typography>

                        {/* Grid Layout */}
                        <Grid container spacing={4}>
                            {/* Left Side - Form */}
                            <Grid item xs={12} md={8}>
                                <Typography variant="body1" sx={{ color: 'white', marginBottom: '8px' }}>
                                    Hello, my name is:
                                </Typography>
                                <TextField
                                    placeholder="Enter your text..."
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        width: "100%",
                                        input: {
                                            color: "white",
                                            padding: "12px 16px",
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            background: "rgba(255, 255, 255, 0.1)", // Semi-transparent glass effect
                                            backdropFilter: "blur(10px)", // Glassmorphism
                                            WebkitBackdropFilter: "blur(10px)", // Safari Support
                                            borderRadius: "10px",
                                            transition: "all 0.3s ease-in-out",
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                background: "rgba(255, 255, 255, 0.15)",
                                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                            },
                                            "&.Mui-focused": {
                                                background: "rgba(255, 255, 255, 0.2)",
                                                border: "1px solid rgba(255, 255, 255, 0.4)",
                                                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
                                            },
                                            "& fieldset": {
                                                border: "none", // Remove default MUI border
                                            },
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "rgba(255, 255, 255, 0.5)",
                                        },
                                    }}
                                />

                                <Typography variant="body1" sx={{ color: 'white', marginTop: '16px' }}>
                                    Here is my email:
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Email address*"
                                    variant="outlined"
                                    sx={{
                                        width: "100%",
                                        input: {
                                            color: "white",
                                            padding: "12px 16px",
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            background: "rgba(255, 255, 255, 0.1)", // Semi-transparent glass effect
                                            backdropFilter: "blur(10px)", // Glassmorphism
                                            WebkitBackdropFilter: "blur(10px)", // Safari Support
                                            borderRadius: "10px",
                                            transition: "all 0.3s ease-in-out",
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                background: "rgba(255, 255, 255, 0.15)",
                                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                            },
                                            "&.Mui-focused": {
                                                background: "rgba(255, 255, 255, 0.2)",
                                                border: "1px solid rgba(255, 255, 255, 0.4)",
                                                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
                                            },
                                            "& fieldset": {
                                                border: "none", // Remove default MUI border
                                            },
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "rgba(255, 255, 255, 0.5)",
                                        },
                                    }} />

                                <Typography variant="body1" sx={{ color: 'white', marginTop: '16px' }}>
                                    About project:
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Your project description"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    sx={{
                                        width: "100%",
                                        "& .MuiInputBase-root": {
                                            color: "white",
                                            padding: "12px 16px",
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            background: "rgba(255, 255, 255, 0.1)", // Semi-transparent glass effect
                                            backdropFilter: "blur(10px)", // Glassmorphism
                                            WebkitBackdropFilter: "blur(10px)", // Safari Support
                                            borderRadius: "10px",
                                            transition: "all 0.3s ease-in-out",
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                background: "rgba(255, 255, 255, 0.15)",
                                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                            },
                                            "&.Mui-focused": {
                                                background: "rgba(255, 255, 255, 0.2)",
                                                border: "1px solid rgba(255, 255, 255, 0.4)",
                                                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
                                            },
                                            "& fieldset": {
                                                border: "none", // Remove default MUI border
                                            },
                                        },
                                        "& .MuiInputBase-input": {
                                            color: "white",
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            // padding: "12px 16px",
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "rgba(255, 255, 255, 0.5)",
                                        },
                                        "& textarea": {
                                            color: "white",
                                            // padding: "12px 16px",
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            background: "transparent",
                                            borderRadius: "10px",
                                            transition: "all 0.3s ease-in-out",
                                        },
                                    }}
                                />


                                <Typography variant="body1" sx={{ color: 'white', marginTop: '16px' }}>
                                    Where did you learn about Tenzen Labs?
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Tell your story"
                                    variant="outlined"
                                    sx={{
                                        width: "100%",
                                        input: {
                                            color: "white",
                                            padding: "12px 16px",
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            background: "rgba(255, 255, 255, 0.1)", // Semi-transparent glass effect
                                            backdropFilter: "blur(10px)", // Glassmorphism
                                            WebkitBackdropFilter: "blur(10px)", // Safari Support
                                            borderRadius: "10px",
                                            transition: "all 0.3s ease-in-out",
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                background: "rgba(255, 255, 255, 0.15)",
                                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                            },
                                            "&.Mui-focused": {
                                                background: "rgba(255, 255, 255, 0.2)",
                                                border: "1px solid rgba(255, 255, 255, 0.4)",
                                                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
                                            },
                                            "& fieldset": {
                                                border: "none", // Remove default MUI border
                                            },
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "rgba(255, 255, 255, 0.5)",
                                        },
                                    }} />

                                {/* Send Button */}
                                <Button
                                    fullWidth
                                    className={styles.button}
                                    sx={{marginTop:'2rem'}}
                                >
                                    Send
                                </Button>
                            </Grid>

                            {/* Right Side - Contact Info */}
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1" sx={{ color: 'white', marginBottom: '8px' }}>
                                    Mail:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginBottom: '16px',
                                    }}
                                >
                                    team@tenzenlabs.com
                                </Typography>

                                <Typography variant="body1" sx={{ color: 'white', marginBottom: '8px' }}>
                                    Address:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    30 North Gould Street, Ste R, Sheridan
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </div>
            <GetInTouch></GetInTouch>
            </div>
        </ThemeProvider>
    );
}
