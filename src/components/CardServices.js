import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import BasicCard from './BasicCard';

//
export default function CardServices(props) {
  const serviceBox = [
    {title:'Control Documental', definition: 'Analizar toda la documentación comercial, de transporte y permisos de importación para asegurar un correcto despacho de importación.'},
    {title:'Seguimiento Logístico y Operativo', definition:'Monitorear tus embarques de manera proactiva y gestionar la documentación ante las marítimas para evitar demoras.'},
    {title:'Permisos de Importación (SIRA/SIRASE/LNA)', definition:'Confección de permisos de importación para tu mercadería de importación'}]
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
        {serviceBox.map((data) => {
          return <BasicCard title={data.title} text={data.definition} />
        })}

      </Box>
    </Container>
  );
}