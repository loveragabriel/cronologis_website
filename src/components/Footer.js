import { Container, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Container>
        <Typography variant='p' sx={{display:'flex', justifyContent:'center', opacity:'0.8', position:'relative', bottom:'0', marginTop:'5em', paddingBottom:'1em'}}>
        © Gabriel Lovera. 2023, Argentina All rights reserved
        </Typography>
    </Container>
  )
}
