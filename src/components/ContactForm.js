import React from 'react'
import { Paper, Box, TextField, Typography, Button, Container } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';


const services = [
    {
        value: 'ControlDocumental',
        label: 'Control Documental',
    },
    {
        value: 'SeguimientoLoOp',
        label: 'Seguimiento Logístico y Operativo',
    },
    {
        value: 'ConfeccionPermisos',
        label: 'Confección de permisos de importación (SIRA/SIRASE/LNA)',
    },
    {
        value: 'FullService',
        label: 'Full Service Origin to Destination',
    },
];

const inputsForm = [
    'Nombre', 'Empresa', 'Correo'
]



export const ContactForm = () => {
    return (
        <Container sx={{ textAlign: 'center', margin: '3em' }}>
            <Typography variant='h3' >Contacto</Typography>
            <Box
                sx={{
                    marginTop: '5em',
                    display: 'flex',
                    justifyContent: 'center',

                    '& > :not(style)': {
                        m: 1,
                    },
                }}
            >

                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        inputsForm.map((input) => {
                            return <TextField sx={{ margin: '1em', display: 'flex', justifyItems: 'center' }} id="outlined-basic" label={input} variant="outlined" />

                        })
                    }
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Servicios"
                        defaultValue="Consulta"
                        helperText="Por favor selecciona una opción"
                        sx={{ margin: '1em' }}
                    >
                        {services.map((option) => (
                            <MenuItem key={option.value} value={option.value} >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button>Enviar</Button>

                </Paper>

            </Box>

        </Container>
    )
}
