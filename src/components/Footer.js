import { Container, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Container>
        <Typography variant='p' sx={{display:'flex',textAlign:'center', opacity:'0.8', position:'relative', bottom:'0'}}>
        © Gabriel Lovera. 2023, Argentina All rights reserved
        </Typography>
    </Container>
  )
}
