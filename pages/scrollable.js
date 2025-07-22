import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header'
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import UIDesignSection from '../components/UIDesignSection';
import NonTechFounderSection from '../components/NonTechFounderSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TextCursorAnimation from '../components/TextCursorAnimation';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import MvpAnimation from '../components/MvpAnimation';

export default function Home() {
    const [scrolledToBottom, setScrolledToBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullPageHeight = document.body.scrollHeight;

            if (scrollY + windowHeight >= fullPageHeight - 50) {
                setScrolledToBottom(true);
            } else {
                setScrolledToBottom(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: scrolledToBottom ? "-100vh" : 0 }} // Moves the entire page up
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ position: "relative", width: "100%" }}
        >
            {/* Main Content (Scrollable) */}
            <Box
                sx={{
                    minHeight: "150vh", // Ensure it's scrollable
                    background: "linear-gradient(to bottom, #000, #111)",
                    color: "white",
                    padding: "5rem",
                    textAlign: "center",
                }}
            >
                <div className={styles.container}>
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
                    <MvpAnimation></MvpAnimation>
                    <div className={styles.quoteSection}>

                        <div className={styles.titleSection}>
                            <TextCursorAnimation></TextCursorAnimation>
                            {/* <h1 className={styles.titleTenzen}>
            {"Tenzen"}
          </h1>
          <div className={styles.titleLabs}>
            {"Labs."}
          </div> */}

                        </div>
                        <div>

                            <Box
                                component="img"
                                sx={{
                                    height: 466,
                                    width: 700,
                                    // maxHeight: { xs: 233, md: 167 },
                                    // maxWidth: { xs: 350, md: 250 },
                                }}
                                alt="The house from the offer."
                                src='/hello_world.svg'
                            />
                        </div>
                    </div>

                    <main className={styles.main}>






                    </main>
                    {/* <p className={styles.description}> */}
                    <Typography variant="body2" sx={{ color: 'white' }}>
                        Design & Development team working with companies from 0 to IPO and beyond.
                        {/* </p> */}
                    </Typography>
                    <div className={styles.quoteButtonContainer}>
                        <button className={styles.button}> <Typography variant='body1'>Get a quote</Typography></button>
                    </div>
                    <ServicesSection></ServicesSection>
                    <IndustriesSection></IndustriesSection>
                    <UIDesignSection></UIDesignSection>
                    <NonTechFounderSection></NonTechFounderSection>
                    <TestimonialsSection></TestimonialsSection>
                </div>
            </Box>

            {/* Get in Touch Section (Revealed on Scroll) */}
            <Box
                sx={{
                    minHeight: "100vh", // Full-screen height
                    background: "#6A0DAD",
                    color: "white",
                    textAlign: "center",
                    padding: "5rem",
                }}
            >
                <Typography variant="h2">Get in Touch</Typography>
                <Typography variant="body1">Let's build something amazing together!</Typography>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#fff", color: "#6A0DAD", mt: 2 }}
                >
                    Contact Us
                </Button>
            </Box>
        </motion.div>
    );
}
