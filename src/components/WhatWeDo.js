import { Container, Typography } from "@mui/material";

export default function WhatWeDo() {
    return (
        <Container sx={{ marginTop: '5em' }}>
            <Typography variant="h4" sx={{ color: '#FF5733', textAlign: 'center', fontWeight: '700', marginBottom: '3em' }}>
                ¿Qué Hacemos?
            </Typography>
            <Typography variant="h2" sx={{ fontSize: '3rem', textAlign: 'center' }}>
                Facilitimos tu proceso de importación, atendiendo los puntos claves de cada coordinación.
            </Typography>
            <Typography variant="h5" sx={{opacity:'0.7', textAlign:'center'}}>
                Nos encargamos de la correcta emisión de documentación y del seguimiento del tránsito para lograr un despacho de mercadería en los tiempos estimados.
            </Typography>
        </Container>
    )
}