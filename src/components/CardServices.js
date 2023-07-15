import React from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import BasicCard from './BasicCard';

export default function CardServices(props) {
  const theme = useTheme();

  const serviceBox = [
    { title: 'Control Documental', definition: 'Analizar toda la documentación comercial, de transporte y permisos de importación para asegurar un correcto despacho de importación.' },
    { title: 'Seguimiento Logístico y Operativo', definition: 'Monitoreo de embarques de manera proactiva y gestión de documentación ante las marítimas para evitar demoras.' },
    { title: 'Permisos de Importación (SIRA/SIRASE/LNA)', definition: 'Confección de permisos de importación para mercaderías.' },
    { title: 'Full Service Origin Destination', definition: 'Coordinación desde origen hasta el despacho de la mercadería.' }
  ];

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '3em',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
      }}
    >
      {serviceBox.map((data) => (
        <BasicCard id={data.title} title={data.title}  text={data.definition} key={data.title}
         />
      ))}
    </Container>
  );
}
