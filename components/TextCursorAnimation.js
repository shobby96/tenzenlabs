// File: components/TextCursorAnimation.js
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});

export default function TextCursorAnimation() {
  const [displayText, setDisplayText] = useState('');
  const [fadeOutTags, setFadeOutTags] = useState(false);
  const cursorControls = useAnimation();
  const fullText = '<Tenzen Labs/>';

  useEffect(() => {
    let index = 0;

    const cursorTimer = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setFadeOutTags(true);
            cursorControls.start({ x: '-36px', transition: { duration: 1 } });
          }, 1000);
        }
      }, 150);
    }, 2000);

    const cursorBlinkInterval = setInterval(() => {
      cursorControls.start({ opacity: [1, 0] });
    }, 700); // Smooth and slow blinking

    return () => {
      clearTimeout(cursorTimer);
      clearInterval(cursorBlinkInterval);
    };
  }, [cursorControls]);

  return (
    <Box sx={{ textAlign: 'center', marginTop: '4rem' }}>
      <Typography
        variant="h3"
        className={vt323.className}
        sx={{ color: '#E0E0E0', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center' }}
      >
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOutTags ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          {displayText.startsWith('<') ? '<' : ''}
        </motion.span>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayText.replace(/[<>/]/g, '')}
        </motion.span>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOutTags ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          {displayText.endsWith('/>') ? '/>' : ''}
        </motion.span>
        <motion.span
          animate={cursorControls}
          transition={{ repeat: Infinity, duration: 0.7, repeatType: 'reverse' }}
          style={{
            display: 'inline-block',
            width: '6px',
            height: '1.2em',
            backgroundColor: '#E0E0E0',
            marginLeft: '4px',
          }}
        />
      </Typography>
    </Box>
  );
}
