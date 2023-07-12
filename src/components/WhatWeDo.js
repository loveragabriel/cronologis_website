import { Container, Typography } from "@mui/material";
import { Fragment } from "react";

export default function WhatWeDo() {
    return (
        <Fragment sx={{ display:'flex', justifyContent:'center', marginTop: '5em' }}>
        <Container >
            <Typography variant="h4" sx={{ color: '#FF5733', textAlign:'center', fontWeight: '700', marginBottom: '3em', marginTop: '3em'  }}>
                ¿Qué Hacemos?
            </Typography>
            <Typography variant="h2" sx={{ fontSize: '2.5rem', textAlign: 'center' }}>
            Facilitamos el flujo de tus embarque de importación, atendiendo los procesos claves de cada coordinación.
            </Typography>
            <Typography variant="h5" sx={{ opacity: '0.7', textAlign: 'center' }}>
                Nos encargamos de asegurar una correcta emisión de documentación y del seguimiento del tránsito para lograr un despacho de mercadería en los tiempos estimados.
            </Typography>
        </Container>
        </Fragment>
    )
}