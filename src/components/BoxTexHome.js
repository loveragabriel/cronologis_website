import * as React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

//Main box on the landing page
export default function BoxTextHome() {
    return (
        <React.Fragment>
            <Container maxWidth="lg" sx={{ height: '60vh' }}>
                <Typography variant='h1' sx={{ fontSize: '2.5707rem', textAlign: 'center', paddingTop: '3rem' }}>
                    ¡Seguimiento de Importación desde origen!
                </Typography>
                <Typography variant='h5' sx={{ fontSize: '1.5rem', opacity: '0.8', textAlign: 'center', paddingTop: '1rem' }}>
                    Análisis, control y gestión operativa de tu proceso de importación.
                </Typography>
            </Container>
        </React.Fragment>
    );
}