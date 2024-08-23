import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const TokenDisplay = ({ tokens, tokensPerRow }) => {
  const tokenWidth = 100; 
  const tokenHeight = 100; 
  const tokenSpacing = 16; 
 
  const containerWidth = `calc(${tokenWidth}px * ${tokensPerRow} + ${tokenSpacing}px * (${tokensPerRow} - 1))`;

  return (
    <Grid
      container
      spacing={0}
      sx={{
        width: containerWidth, 
        justifyContent: 'flex-start', 
        flexWrap: 'wrap', 
        gap: `${tokenSpacing}px`,
      }}
    >
      {tokens.map((token, index) => (
        <Grid
          item
          key={index}
          sx={{
            width: `${tokenWidth}px`,
            height: `${tokenHeight}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:'20px'
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: token.color,
              color: 'white',
              textAlign: 'center',
              borderRadius: '4px',
            }}
          >
            <Typography variant="h6">{token.value}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TokenDisplay;