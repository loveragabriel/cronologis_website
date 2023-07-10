import React from 'react'
import { Paper, Box, TextField } from '@mui/material'
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
        <div>
            <Box
                sx={{
                    marginTop: '5em',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',

                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >

                <Paper elevation={3}>
                    {
                        inputsForm.map((input) => {
                            return <TextField sx={{ padding: '1em' }} id="outlined-basic" label={input} variant="outlined" />

                        })
                    }
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Servicios"
                        defaultValue="Consulta"
                        helperText="Por favor selecciona una opción"
                    >
                        {services.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Paper>
            </Box>

        </div>
    )
}
