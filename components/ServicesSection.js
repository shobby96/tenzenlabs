// File: components/ServicesSection.js
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';

export default function ServicesSection() {
  return (
    <Box sx={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'transparent', borderRadius: '8px', borderWidth: 'thin', borderColor: '#fff', borderStyle: 'dashed', width: '100%', boxSizing: 'border-box' }}>
      <Typography variant="h4" sx={{ color: '#00c4ff', marginBottom: '1rem' }}>
        What can we do for you?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              clipPath: "polygon(0 0,100% 0,100% calc(100% - 22px),calc(100% - 22px) 100%,0 100%)",
              width: '100%',          // Full width or set a specific width (e.g., '400px')
              maxWidth: 652,          // Maintain the maximum width
              position: 'relative',   // Needed for the aspect ratio box
              boxShadow: 3,           // Optional: adds shadow for better visual              
              backgroundColor: '#111', color: '#fff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.01)',  // Minimal scale effect
                boxShadow: `
              0 4px 15px rgba(75, 0, 130, 0.3),  // Subtle purple glow
              0 2px 10px rgba(0, 0, 0, 0.4)      // Soft dark shadow
            `,
              },
            }}
          >
            {/* Aspect Ratio Box */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                paddingTop: '83.13%',  // (542 / 652) * 100 = 83.13% to maintain 652:542 ratio
                backgroundImage: 'url(/build.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',  // Scales to cover while maintaining aspect ratio
                backgroundPosition: 'center',
              }}
            >
              <CardContent
                sx={{
                  position: 'absolute',
                  backdropFilter: 'blur(3px)',
                  '&:hover': { backdropFilter: 'blur(0px)' },
                  transition: 'backdrop-filter 0.3s ease-in-out',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  color: 'white', // Text color on the background
                  boxSizing: 'border-box'
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                  Create a design
                </Typography>
                <Typography variant="body2" >
                  We specialize in data-rich platforms, always going UX-first.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>

          <Card
            sx={{
              clipPath: "polygon(0 0,100% 0,100% calc(100% - 22px),calc(100% - 22px) 100%,0 100%)",
              width: '100%',          // Full width or set a specific width (e.g., '400px')
              maxWidth: 652,          // Maintain the maximum width
              position: 'relative',   // Needed for the aspect ratio box
              boxShadow: 3,           // Optional: adds shadow for better visual              
              backgroundColor: '#111', color: '#fff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.01)',  // Minimal scale effect
                boxShadow: `
              0 4px 15px rgba(75, 0, 130, 0.3),  // Subtle purple glow
              0 2px 10px rgba(0, 0, 0, 0.4)      // Soft dark shadow
            `,


              },

            }}
          >
            {/* Aspect Ratio Box */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                paddingTop: '83.13%',  // (542 / 652) * 100 = 83.13% to maintain 652:542 ratio
                backgroundImage: 'url(/mvp.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',  // Scales to cover while maintaining aspect ratio
                backgroundPosition: 'center',
              }}
            >
              <CardContent
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backdropFilter: 'blur(3px)',
                  '&:hover': { backdropFilter: 'blur(0px)' },
                  transition: 'backdrop-filter 0.3s ease-in-out',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  color: 'white', // Text color on the background
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                  Develop an MVP
                </Typography>

                <Typography variant="body2">
                  We have released dozens of MVPs and full-scale products that now have millions of users worldwide.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              clipPath: "polygon(0 0,100% 0,100% calc(100% - 22px),calc(100% - 22px) 100%,0 100%)",
              width: '100%',          // Full width or set a specific width (e.g., '400px')
              maxWidth: 652,          // Maintain the maximum width
              position: 'relative',   // Needed for the aspect ratio box
              boxShadow: 3,           // Optional: adds shadow for better visual              
              backgroundColor: '#111', color: '#fff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.01)',  // Minimal scale effect
                boxShadow: `
    0 4px 15px rgba(75, 0, 130, 0.3),  // Subtle purple glow
    0 2px 10px rgba(0, 0, 0, 0.4)      // Soft dark shadow
  `,
              },

            }}
          >
            {/* Aspect Ratio Box */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                paddingTop: '83.13%',  // (542 / 652) * 100 = 83.13% to maintain 652:542 ratio
                backgroundImage: 'url(/augment.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',  // Scales to cover while maintaining aspect ratio
                backgroundPosition: 'center',
              }}
            >
              <CardContent
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backdropFilter: 'blur(3px)',
                  '&:hover': { backdropFilter: 'blur(0px)' },
                  transition: 'backdrop-filter 0.3s ease-in-out',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  color: 'white', // Text color on the background
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                  Expand your team
                </Typography>
                <Typography variant="body2">
                  We hire only the top 1% of the recruitment funnel to offer you the best of the best.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
