import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionCard = motion(Card);

const Home = () => {
  const navigate = useNavigate();

  const featuredPhotos = [
    {
      id: 1,
      title: 'Featured Photo 1',
      image: 'https://source.unsplash.com/random/800x600?nature',
      description: 'A beautiful landscape captured in perfect light.',
    },
    {
      id: 2,
      title: 'Featured Photo 2',
      image: 'https://source.unsplash.com/random/800x600?portrait',
      description: 'Capturing moments that tell stories.',
    },
    {
      id: 3,
      title: 'Featured Photo 3',
      image: 'https://source.unsplash.com/random/800x600?architecture',
      description: 'Urban landscapes and city life.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://source.unsplash.com/random/1920x1080?photography)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" gutterBottom>
              Welcome to My Photo Portfolio
            </Typography>
            <Typography variant="h5" gutterBottom>
              Capturing moments, telling stories through photography
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/gallery')}
              sx={{ mt: 4 }}
            >
              View Gallery
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Photos Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Featured Photos
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {featuredPhotos.map((photo, index) => (
            <Grid item xs={12} md={4} key={photo.id}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{ height: '100%' }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={photo.image}
                  alt={photo.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {photo.title}
                  </Typography>
                  <Typography>
                    {photo.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 