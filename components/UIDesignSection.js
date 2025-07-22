import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const UIDesignSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Handle mouse movement for parallax effect
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            const x = (event.clientX - left - width / 2) / width;
            const y = (event.clientY - top - height / 2) / height;
            setMousePosition({ x, y });
        };

        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Image sources for 10 images
    const images = [
        '/portfolio1.png',
        '/portfolio2.png',
        '/portfolio3.png',
        '/portfolio4.png',
        '/portfolio5.png',
        '/portfolio4.png',
        '/portfolio3.png',
        '/portfolio2.png',
        '/portfolio1.png',
        '/portfolio5.png',
    ];

    // Sizes for each image: [width, height] in pixels
    const sizes = [
        [140, 140],
        [150, 150],
        [140, 100],
        [130, 130],
        [200, 250],
        [140, 120],
        [150, 150],
        [120, 110],
        [130, 140],
        [150, 150],
    ];

    // Predefined positions to prevent overlap with center text
    const positions = [
        { top: '5%', left: '5%' },
        { top: '10%', right: '10%' },
        { bottom: '15%', left: '5%' },
        { bottom: '10%', right: '10%' },
        { top: '25%', left: '70%' },
        { bottom: '25%', right: '70%' },
        { top: '15%', left: '80%' },
        { bottom: '5%', right: '20%' },
        { top: '35%', left: '10%' },
        { bottom: '30%', right: '5%' },
    ];

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'relative',
                width: '100%',
                height: isMobile ? '600px' : '800px',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px', 
                borderWidth: 'thin', 
                borderColor: '#fff', 
                borderStyle: 'dashed', 
                textAlign: 'center', 
                width: '100%', 
                boxSizing: 'border-box',
                marginTop: '4rem',
                padding: '1rem',

                
            }}
        >
            {/* Safe Zone with Text */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 10,
                    width: isMobile ? '70%' : '40%',
                    height: isMobile ? '200px' : '300px',
                    backgroundColor: 'transparent',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '1rem',
                    
                }}
            >
                <Typography variant={isMobile ? 'h3' : 'h2'} sx={{ color: 'white' }}>
                    Beautiful & <br /> <Typography variant="glowText" >functional UI</Typography> <br /> <Typography variant="body2" sx={{ color: 'white', marginBottom: '2rem' }}>
                        A digital product without proper UX and compelling design has lower chances for success. Our design process
                        is tailored to make your app simple, enchanting, and easy to use.
                    </Typography>
                </Typography>
            </Box>

            {/* Floating Images */}
            {images.map((src, index) => {
                const [width, height] = sizes[index];
                const { top, left, right, bottom } = positions[index];

                return (
                    <Box
                        key={index}
                        component="img"
                        src={src}
                        alt={`Floating Image ${index + 1}`}
                        sx={{
                            position: 'absolute',
                            width: `${width}px`,
                            height: `${height}px`,
                            objectFit: 'contain',
                            transition: 'transform 0.3s ease-out',
                            pointerEvents: 'none',
                            zIndex: 1,
                            top: top,
                            left: left,
                            right: right,
                            bottom: bottom,
                            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                        }}
                    />
                );
            })}
        </Box>
    );
};

export default UIDesignSection;

