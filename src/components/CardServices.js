import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import BasicCard from './BasicCard';

//
export default function CardServices(props) {
  const serviceBox = ['Service1', 'Service2', 'Service3']
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '3em' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 3,
            Width: '90vw',
            height: '30vh',

          },
        }}
      >
        {serviceBox.map((services) => {
          return <BasicCard title={services} text={services} link={services} />
        })}

      </Box>
    </Container>
  );
}