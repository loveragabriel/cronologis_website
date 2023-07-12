import * as React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import vessel from './vessel.jpg';
import { ComponentText } from './ComponentText';

// Main box on the landing page
export default function BoxTextHome() {
  return (
    <React.Fragment>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${vessel})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          filter: 'brightness(30%)' // Add the desired filter effect here
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: '3rem',
          }}
        >
        </Container>
      </div>
      <ComponentText></ComponentText>

    </React.Fragment>
  );
}
