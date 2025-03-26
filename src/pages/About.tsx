import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Profile Section */}
        <Grid item xs={12} md={4}>
          <MotionPaper
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4, textAlign: 'center' }}
          >
            <Avatar
              src="https://source.unsplash.com/random/200x200?portrait"
              sx={{ width: 200, height: 200, mx: 'auto', mb: 3 }}
            />
            <Typography variant="h4" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Professional Photographer
            </Typography>
            <Typography variant="body1" paragraph>
              With over 10 years of experience in photography, I specialize in
              capturing moments that tell stories. My work spans across various
              genres including landscape, portrait, and street photography.
            </Typography>
          </MotionPaper>
        </Grid>

        {/* Skills and Experience */}
        <Grid item xs={12} md={8}>
          <MotionPaper
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4 }}
          >
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              I discovered my passion for photography during my travels around the
              world. What started as a hobby quickly evolved into a professional
              career. I believe that every photograph has the power to tell a
              unique story and evoke emotions in the viewer.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Skills & Expertise
            </Typography>
            <Grid container spacing={2}>
              {[
                'Digital Photography',
                'Portrait Photography',
                'Landscape Photography',
                'Street Photography',
                'Photo Editing',
                'Lighting Techniques',
              ].map((skill, index) => (
                <Grid item xs={12} sm={6} key={skill}>
                  <Paper
                    sx={{
                      p: 2,
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography>{skill}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Equipment
            </Typography>
            <Stack spacing={1}>
              {[
                'Sony A7 III',
                'Canon EOS R5',
                'Various Prime Lenses',
                'Professional Lighting Kit',
                'Drone Photography Equipment',
              ].map((item) => (
                <Typography key={item}>• {item}</Typography>
              ))}
            </Stack>
          </MotionPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 