import React, { useState } from 'react';
import TokenForm from './components/TokenForm';
import TokenDisplay from './components/TokenDisplay';
import { Container } from '@mui/material';
import Header from './components/Header';
function App() {
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);
  const [blueTokensPerRow, setBlueTokensPerRow] = useState(0);
  const [redTokensPerRow, setRedTokensPerRow] = useState(0);

  const handleGenerate = (formValues) => {
    const {
      blueTokenCount,
      blueTokenPrefix,
      blueTokensPerRow,
      redTokenCount,
      redTokenPrefix,
      redTokensPerRow,
    } = formValues;

    const newBlueTokens = [];
    const newRedTokens = [];

    for (let i = 1; i <= blueTokenCount; i++) {
      newBlueTokens.push({
        value: `${blueTokenPrefix}${i}`,
        color: 'blue',
      });
    }

    for (let i = 1; i <= redTokenCount; i++) {
      newRedTokens.push({
        value: `${redTokenPrefix}${i}`,
        color: 'red',
      });
    }

    setBlueTokens(newBlueTokens);
    setRedTokens(newRedTokens);
    setBlueTokensPerRow(blueTokensPerRow);
    setRedTokensPerRow(redTokensPerRow);
  };

  const handleClear = () => {
    setBlueTokens([]);
    setRedTokens([]);
  };

  return (
    <>
    <Header style={{marginBottom:'150px'}}/>
   <div>
     <Container sx={{ marginTop: '16px' }}>
      <TokenForm onGenerate={handleGenerate} onClear={handleClear} />
      <TokenDisplay tokens={blueTokens} tokensPerRow={blueTokensPerRow} />
      <TokenDisplay tokens={redTokens} tokensPerRow={redTokensPerRow} />
    </Container>
   </div>
    </>
  );
}

export default App;
