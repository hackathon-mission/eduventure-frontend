import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Listing } from '../data/interfaces';
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../data/consts';
import { theme } from '../data/theme';

const StyledPaper = styled(Paper)(() => ({
  //padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.colors.primary,
}));

const Market: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${serverUrl}/listings`)
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Marketplace
      </Typography>
      <Button href="/addListing">Add listing</Button>
      <Grid container spacing={2}>
        {listings.map((listing) => (
          <Grid item xs={12} md={4} key={listing._id.toString()}>
            <StyledPaper>
              <Typography variant="h6">{listing.name}</Typography>
              <Typography variant="body1">{listing.description}</Typography>
              <Button onClick={() => navigate(`/listing/${listing._id.toString()}`)}>View</Button>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Market;

