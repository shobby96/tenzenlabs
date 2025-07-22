// File: components/TestimonialsSection.js
import { Box, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ScrollableTestimonials from './ScrollableTestimonials';

const testimonials = [
  {
    title: 'Clutch',
    rating: '4.9 rating',
    reviews: '30 reviews',
    content: "I've worked with Tenzen Labs on three products so far (...) and all of our work together have been efficient, high producing..",
    author: 'Lauren Hanson',
    role: 'Co-founder at FlipMD',
    avatar: '/lauren.jpg',
  },
  {
    title: 'Clutch',
    content: "Tenzen Labs has experience doing medical apps, so they know how to deal with HIPAA compliance and sensitive information.",
    author: 'Blair Matthews',
    role: 'Co-Founder, President & CEO, Zuri Fertility',
    avatar: '/blair.jpg',
  },
  {
    title: 'Clutch',
    content: "Everyone was really nice and hardworking. Also the short amount of time in which we got answers to our questions and needs.",
    author: 'Josh Bartels',
    role: 'Data Analyst at Sports360',
    avatar: '/josh.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <Box sx={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'transparent', borderRadius: '8px', borderWidth: 'thin', borderColor: '#fff', borderStyle: 'dashed', width: "100%",boxSizing:'border-box' }}>
      <Typography variant="h4" sx={{ color: 'white', marginBottom: '2rem' }}>
        That's what <Typography variant="glowText" >they said</Typography>

        {/* <Box component="span" sx={{ color: '#00c4ff' }}>they said</Box> */}
      </Typography>

      <Typography variant="body2" sx={{ color: 'white', marginBottom: '2rem' }}>
        Tenzen Labs is recommended by 11 out of 10 dentists. Our clients agree with this statement. See below!
      </Typography>


      <ScrollableTestimonials></ScrollableTestimonials>

    </Box>
  );
}
