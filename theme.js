// File: theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        // fontFamily: "'Fira Code', monospace", // Apply Ubuntu Mono globally
        fontFamily: "'Montserrat', sans-serif",
        // fontFamily: "'Satoshi', sans-serif",

        body1: {
            color: "#D1D5DB !important",  // Set global color for body1
        },
        body2: {
            color: "#D1D5DB !important",  // Set global color for body2
        },
        h6: {
            color: "#D1D5DB !important",  // Set global color for body2
        },
        h4: {
            color: "#D1D5DB !important",  // Set global color for body2
        },

        glowText: {
            background: 'linear-gradient(to right, #6a0dad, #ffffff)',  // Purple to white
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: `
              0 0 4px rgba(106, 13, 173, 0.5),  /* Soft purple glow */
              0 0 8px rgba(255, 255, 255, 0.3)  /* Gentle white glow */
            `,
            // fontWeight: 600,
            letterSpacing: '0.5px',
        },
    },
});

export default theme;
