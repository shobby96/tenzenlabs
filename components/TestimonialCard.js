import React from 'react';
import { Box, Typography, Avatar, Link } from '@mui/material';

const TestimonialCard = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(0,0,0,0.8) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '24px',
                maxWidth: '350px',
                minHeight: '300px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                    boxShadow: '0 0 20px 4px rgba(103, 58, 183, 0.7)', // Deep purple glow on hover
                    transform: 'translateY(-5px)',
                },
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Clutch Logo */}
            <Typography
                variant="subtitle2"
                sx={{
                    fontWeight: 600,
                    color: '#fff',
                    marginBottom: '12px',
                }}
            >
                Clutch
            </Typography>

            {/* Testimonial Text */}
            <Typography
                variant="body1"
                sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    fontWeight: 400,
                    color: '#fff',
                    marginBottom: '24px',
                }}
            >
                Tenzen has experience doing medical apps, so they know how to deal with HIPAA compliance and sensitive information.
            </Typography>

            {/* Author Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                <Avatar
                    src="/blair-matthews.jpg"
                    alt="Blair Matthews"
                    sx={{ width: 48, height: 48, marginRight: '12px' }}
                />
                <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#fff' }}>
                        Blair Matthews
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Co-Founder, President & CEO,&nbsp;
                        <Link href="#" underline="hover" sx={{ color: '#7C4DFF', fontWeight: 500 }}>
                            Zuri Fertility
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TestimonialCard;
