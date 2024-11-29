import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #1a1a1a, #2a2a2a)',
        color: '#fff',
        py: 3,
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)'
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="#fff" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" sx={{ color: '#fff', '&:hover': { color: '#5998ea' } }} display="block">Home</Link>
              <Link href="/about" sx={{ color: '#fff', '&:hover': { color: '#5998ea' } }} display="block">About</Link>
              <Link href="/contact" sx={{ color: '#fff', '&:hover': { color: '#5998ea' } }} display="block">Contact</Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="#fff" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Dialed In Sports. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;