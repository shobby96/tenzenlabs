// components/QuoteSection.js or .tsx

import styles from '../styles/Home.module.css';
import TextCursorAnimation from '../components/TextCursorAnimation';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function QuoteSection() {
  const router = useRouter();

  return (
    <>
      <div className={styles.quoteSection}>
        {/* Left Text Block */}
        <div className={styles.titleSection}>
          <TextCursorAnimation />
          <Typography variant="body2" className={styles.description}>
            Design & Development team working with companies from 0 to IPO and beyond.
          </Typography>
          <div className={styles.quoteButtonContainer}>
            <button className={styles.button} onClick={() => router.push('/contact')}>
              <Typography variant="body1">Get a quote</Typography>
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div>
          <Box
            component="img"
            className={styles.quoteImage}
            alt="Hello World Illustration"
            src="/hello_world.svg"
          />
        </div>
      </div>
    </>
  );
}
