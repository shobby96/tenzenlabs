import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header'
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import UIDesignSection from '../components/UIDesignSection';
import NonTechFounderSection from '../components/NonTechFounderSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import MvpAnimation from '../components/MvpAnimation';
import GetInTouch from '../components/GetInTouch';
import { useRouter } from "next/router"; // Import Next.js router
import QuoteSection from '../components/QuoteSection';
import { Box } from '@mui/material';




export default function Home() {
  const router = useRouter(); // Initialize router
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.container}
        sx={{ paddingBottom: { xs: "25rem", md: "30rem", lg: "30rem" } }}>
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

          <QuoteSection></QuoteSection>
          <MvpAnimation></MvpAnimation>



          <ServicesSection></ServicesSection>
          <IndustriesSection></IndustriesSection>
          <UIDesignSection></UIDesignSection>
          <NonTechFounderSection></NonTechFounderSection>
          <TestimonialsSection></TestimonialsSection>


        </div>
        <GetInTouch></GetInTouch>
      </Box>
    </ThemeProvider>
  );
}