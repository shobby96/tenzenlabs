// File: components/IndustriesSection.js
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// ---- MUI Icons -------------------------------------------------
import LocalHospitalRoundedIcon   from '@mui/icons-material/LocalHospitalRounded';
import ShoppingCartRoundedIcon    from '@mui/icons-material/ShoppingCartRounded';
import SchoolRoundedIcon          from '@mui/icons-material/SchoolRounded';
import StorefrontRoundedIcon      from '@mui/icons-material/StorefrontRounded';
import PeopleAltRoundedIcon       from '@mui/icons-material/PeopleAltRounded';

// ---- data (icon included) --------------------------------------
const industries = [
  {
    title: 'Healthcare',
    text:
      'At Tenzen Labs, we develop Telehealth, Diagnostics, Wellness, and other Healthcare tools while adhering to HIPAA & GDPR regulations. Should you need FDA approval, we establish processes to assist you in obtaining it.',
    icon: <LocalHospitalRoundedIcon sx={{ fontSize: 40, color: '#FF647C' }} />,
  },
  {
    title: 'Marketplaces',
    text:
      'Thanks to plenty of experience with marketplaces, we use ready-made, tested solutions that speed up development by at least 30%.',
    icon: <ShoppingCartRoundedIcon sx={{ fontSize: 40, color: '#FFB74D' }} />,
  },
  {
    title: 'Education',
    text:
      'Our teams excel in building dynamic and gamified e-learning platforms, virtual classroom software, assessment & testing tools.',
    icon: <SchoolRoundedIcon sx={{ fontSize: 40, color: '#4FC3F7' }} />,
  },
  {
    title: 'Ecommerce',
    text:
      'Should you need Ecommerce stores, or software from Inventory Management systems to Analytics tools, Tenzen Labs does just that. On top of this, we utilize proper UX to drive conversions.',
    icon: <StorefrontRoundedIcon sx={{ fontSize: 40, color: '#FFD95B' }} />,
  },
  {
    title: 'Social Media',
    text:
      'We have built a number of social media apps, knowing all ins and outs of their development. If you need smart feeds, messaging, necessary security functionality – Tenzen Labs is here to help!',
    icon: <PeopleAltRoundedIcon sx={{ fontSize: 40, color: '#7C4DFF' }} />,
  },
];

// ----------------------------------------------------------------
export default function IndustriesSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        // px: { xs: 2, md: 8 },
        color: 'white',
        width: '100%',
      }}
    >
      {/* ---- Section title ---- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Industries{' '}
          <Box component="span" sx={{ color: '#6A0DAD' }}>
            we work with
          </Box>
        </Typography>
      </motion.div>

      {/* ---- Cards grid ---- */}
      <Grid container spacing={4}>
        {industries.map((ind, index) => (
          <Grid item xs={12} md={6} key={ind.title}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: 3,
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 3,
                  background:
                    'linear-gradient(145deg, rgba(30,30,30,0.6), rgba(50,50,50,0.3))',
                  backdropFilter: 'blur(10px)',
                  transition: '0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 22px rgba(106,13,173,0.5)',
                    transform: 'translateY(-4px)',
                  },
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                }}
              >
                {/* Icon */}
                <Box sx={{ mt: '4px' }}>{ind.icon}</Box>

                {/* Text */}
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#D1B2FF"
                    gutterBottom
                  >
                    {ind.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#DDDDDD' }}>
                    {ind.text}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
