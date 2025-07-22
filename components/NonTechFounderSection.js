// File: components/NonTechFounderSection.js
import { Box, Grid, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function NonTechFounderSection() {
  return (
    <Box sx={{
      marginTop: '4rem', padding: '2rem', backgroundColor: 'transparent', borderRadius: '8px', borderWidth: 'thin', borderColor: '#fff', borderStyle: 'dashed', textAlign: 'left',
    }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: 'white', marginBottom: '1rem' }}>
            If you are <Typography variant="glowText" >non-tech founder</Typography>
            {/* <Box component="span" sx={{ color: '#6a0dad' }}></Box> */}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            We have this covered. We will explain telemedicine app development process in detail, without jargon. You will
            always see the progress of your projects and see demos biweekly.
          </Typography>
        </Grid>

      </Grid>
      <Grid item xs={12} md={6} sx={{ marginTop: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', }}>
              <LightbulbIcon sx={{ color: '#6a0dad', marginRight: '1rem', fontSize: '2rem' }} />
              <Typography variant="h6" sx={{ color: 'white' }}>Transparent process & reports</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'white' }}>
              You can see project status on task management tools like Jira, get in touch with any team member in Slack.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <GroupsIcon sx={{ color: '#6a0dad', marginRight: '1rem', fontSize: '2rem' }} />
              <Typography variant="h6" sx={{ color: 'white' }}>Guidance from the team</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Product Owner is your go-to person to ask any questions you might have regarding the project.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <HandshakeIcon sx={{ color: ' #6a0dad', marginRight: '1rem', fontSize: '2rem' }} />
              <Typography variant="h6" sx={{ color: 'white' }}>Smooth onboarding</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Before we start a project you will receive materials explaining the workflow and necessary tech details
              you need to know.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <CalendarTodayIcon sx={{ color: '#6a0dad', marginRight: '1rem', fontSize: '2rem' }} />
              <Typography variant="h6" sx={{ color: 'white' }}>Regular demos</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Every few weeks we present demos of the results, so you always know what’s happening.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
