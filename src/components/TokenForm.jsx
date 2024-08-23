import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const TokenForm = ({ onGenerate, onClear }) => {
  const [blueTokenCount, setBlueTokenCount] = useState(0);
  const [blueTokenPrefix, setBlueTokenPrefix] = useState('');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState(0);
  const [redTokenCount, setRedTokenCount] = useState(0);
  const [redTokenPrefix, setRedTokenPrefix] = useState('');
  const [redTokensPerRow, setRedTokensPerRow] = useState(0);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (blueTokenCount <= 0) {
      newErrors.blueTokenCount = 'Number of Blue Tokens must be greater than 0';
    }
    if (!blueTokenPrefix.trim()) {
      newErrors.blueTokenPrefix = 'Prefix for Blue Tokens is required';
    }
    if (blueTokensPerRow <= 0) {
      newErrors.blueTokensPerRow = 'Blue Tokens per Row must be greater than 0';
    }
    if (redTokenCount <= 0) {
      newErrors.redTokenCount = 'Number of Red Tokens must be greater than 0';
    }
    if (!redTokenPrefix.trim()) {
      newErrors.redTokenPrefix = 'Prefix for Red Tokens is required';
    }
    if (redTokensPerRow <= 0) {
      newErrors.redTokensPerRow = 'Red Tokens per Row must be greater than 0';
    }
    return newErrors;
  };

  const handleClear = () => {
    setBlueTokenCount(0);
    setBlueTokenPrefix('');
    setBlueTokensPerRow(0);
    setRedTokenCount(0);
    setRedTokenPrefix('');
    setRedTokensPerRow(0);
    setErrors({});

    onClear();
  };

  const handleGenerate = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      onGenerate({
        blueTokenCount,
        blueTokenPrefix,
        blueTokensPerRow,
        redTokenCount,
        redTokenPrefix,
        redTokensPerRow,
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Box p={3} boxShadow={3} borderRadius={2} bgcolor="background.paper">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              label="Number of Blue Tokens"
              type="number"
              value={blueTokenCount}
              onChange={(e) => setBlueTokenCount(parseInt(e.target.value))}
              fullWidth
              variant="outlined"
              error={!!errors.blueTokenCount}
              helperText={errors.blueTokenCount}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Prefix for Blue Tokens"
              value={blueTokenPrefix}
              onChange={(e) => setBlueTokenPrefix(e.target.value)}
              fullWidth
              variant="outlined"
              error={!!errors.blueTokenPrefix}
              helperText={errors.blueTokenPrefix}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Blue Tokens per Row"
              type="number"
              value={blueTokensPerRow}
              onChange={(e) => setBlueTokensPerRow(parseInt(e.target.value))}
              fullWidth
              variant="outlined"
              error={!!errors.blueTokensPerRow}
              helperText={errors.blueTokensPerRow}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Number of Red Tokens"
              type="number"
              value={redTokenCount}
              onChange={(e) => setRedTokenCount(parseInt(e.target.value))}
              fullWidth
              variant="outlined"
              error={!!errors.redTokenCount}
              helperText={errors.redTokenCount}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Prefix for Red Tokens"
              value={redTokenPrefix}
              onChange={(e) => setRedTokenPrefix(e.target.value)}
              fullWidth
              variant="outlined"
              error={!!errors.redTokenPrefix}
              helperText={errors.redTokenPrefix}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Red Tokens per Row"
              type="number"
              value={redTokensPerRow}
              onChange={(e) => setRedTokensPerRow(parseInt(e.target.value))}
              fullWidth
              variant="outlined"
              error={!!errors.redTokensPerRow}
              helperText={errors.redTokensPerRow}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGenerate}
              fullWidth
              sx={{
                py: 1.5,
                fontSize: 16,
              }}
            >
              Generate
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClear}
              fullWidth
              sx={{
                py: 1.5,
                fontSize: 16,
              }}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default TokenForm;