import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import styles from "../styles/Home.module.css";
import Header from '../components/Header';
import TechStackSection from '../components/TechStackSection';
import DevelopmentCycleTimeline from '../components/DevelopmentCycleTimeline';
import OurServicesSection from '../components/OurServices';

export default function ContactSection() {
    return (

        <ThemeProvider theme={theme}>
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
                <OurServicesSection></OurServicesSection>
                <Typography variant="h4" sx={{ fontWeight: "bold",  mb: 2, textAlign:'center', width: '100%'}}>
                    Our Process
                </Typography>
                <DevelopmentCycleTimeline></DevelopmentCycleTimeline>
               
                <TechStackSection></TechStackSection>

            </div>
        </ThemeProvider>
    );
}
