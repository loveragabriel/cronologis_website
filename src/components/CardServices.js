import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

//
export default function CardServices() {
  const serviceBox = ['Service1', 'Service2', 'Service3', 'Service4']
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {serviceBox.map((services) => {
          return <Paper elevation={3} >
            {services}
          </Paper>
        }
        )
        }

      </Box>
    </Container>
  );
}