import React from 'react'
import { Box, TextField, Typography, Button, Container } from '@mui/material'
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
    'Nombre de Contacto', 'Empresa', 'Correo'
]

export default function ContactForm (){
    return (
            <Box sx={{ display:'flex'}} id='contact' >
        <Container >
            <Typography variant='h4' sx={{ marginTop: '3em', textAlign:'center'}}>Contacto</Typography>
            <Box
                sx={{
                    marginTop: '1em',
                    display: 'flex',
                    justifyContent: 'center',

                    '& > :not(style)': {
                        m: 1,
                    },
                }}
            >

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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

                </Box>
            </Box>
        </Container>
        </Box>
    )
}
