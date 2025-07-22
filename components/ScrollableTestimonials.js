import React, { useRef, useEffect, useState } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TestimonialCard from './TestimonialCard';

const ScrollableTestimonials = () => {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [cardWidth, setCardWidth] = useState(0);

  // Dummy data for testimonials (Replace with actual data)
  const testimonials = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
  }));

  // Dynamically calculate the width of a card
  useEffect(() => {
    const cardElement = scrollRef.current?.querySelector('.testimonial-card');
    if (cardElement) {
      const gap = 16; // Gap between cards
      setCardWidth(cardElement.offsetWidth + gap);
    }
  }, [isMobile, isTablet]);

  // Scroll to the next card
  const scrollNextCard = () => {
    const container = scrollRef.current;
    container.scrollBy({
      left: cardWidth,
      behavior: 'smooth',
    });
  };

  // Snap to the nearest card on scroll end
  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);

    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        padding: '20px 0',
        overflow: 'hidden',
      }}
    >
      {/* Scrollable Container */}
      <Box
        ref={scrollRef}
        onScroll={() => {
          clearTimeout(scrollRef.current.scrollTimeout);
          scrollRef.current.scrollTimeout = setTimeout(handleScroll, 100);
        }}
        sx={{
          display: 'flex',
          gap: '16px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          padding: '16px',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
        }}
      >
        {testimonials.map((item) => (
          <Box
            key={item.id}
            className="testimonial-card"
            sx={{
              flex: '0 0 auto',
              width: isMobile ? '250px' : isTablet ? '300px' : '350px',
            }}
          >
            <TestimonialCard />
          </Box>
        ))}
      </Box>

      {/* Scroll Right Button */}
      <IconButton
        onClick={scrollNextCard}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' },
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          zIndex: 10,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ScrollableTestimonials;
