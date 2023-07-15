import React from 'react'
import Typography from '@mui/material/Typography/Typography'
import Container from '@mui/material/Container/Container'

export const ComponentText = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: '20vh', color: 'white' }}>
      <Typography variant="h1" sx={{ fontSize: '2.5707rem', color: 'white' }}>
        ¡Coordinación de Importación desde origen!
      </Typography>
      <Typography variant="h5" sx={{ fontSize: '1.3rem', opacity: '0.8', paddingTop: '1rem' }}>
        Análisis, control y gestión operativa de procesos de importación.
      </Typography>
    </Container>
  )
}
