import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MotionPaper = motion(Paper);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Me
      </Typography>
      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <MotionPaper
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4, height: '100%' }}
          >
            <Typography variant="h4" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out!
            </Typography>

            <Stack spacing={2} sx={{ mt: 4 }}>
              <Typography variant="h6">Contact Information</Typography>
              <Typography>Email: contact@photoportfolio.com</Typography>
              <Typography>Phone: +1 (555) 123-4567</Typography>
              <Typography>Location: New York, NY</Typography>
            </Stack>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Follow Me
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton color="primary" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Box>
          </MotionPaper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <MotionPaper
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4 }}
          >
            <Typography variant="h4" gutterBottom>
              Send a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </MotionPaper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 