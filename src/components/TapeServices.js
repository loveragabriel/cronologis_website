import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TapeCard from './TapeCard';

//List of the services 
const serviceList = ['Control Documental', 'Seguimiento Logístico y Operativo', 'Confección de permisos de importación', 'Full Service Origin to Destination']

export default function TapeServices(prop) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container
                maxWidth="xl"
                sx={{
                    bgcolor: '#221133',
                    marginTop: '5em',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    // Styles for md breakpoint and above
                    md: {
                        display: 'flex',
                        flexWrap: 'nowrap',
                    },
                }}
            >
                {/* Map the list of services offered */}
                {serviceList.map((service) => {
                    return <TapeCard index={service} TapeServices={service} />
                })}
            </Container>
        </React.Fragment>
    );
}