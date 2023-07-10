import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TapeCard from './TapeCard';

const services3 = ['Control Documental', 'Seguimiento Logístico y Operativo', 'Confección de permisos de importación', 'Full Service Origin to Destination']

export default function TapeServices(prop) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%" sx={{ bgcolor: '#221133', display: 'flex', marginTop: '5em' }}>
                {services3.map((Ser) => {
                    return <TapeCard TapeServices={Ser} />
                })}
            </Container>
        </React.Fragment>
    );
}