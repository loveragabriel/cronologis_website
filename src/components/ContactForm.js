import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Container } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import emailjs from '@emailjs/browser';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;

console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log(process.env.REACT_APP_EMAILJS_USER_ID);

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

const inputsForm = ['Nombre de Contacto', 'Empresa', 'Correo'];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    Correo: '',
    Empresa: '',
    'Nombre de Contacto': '',
    service: '',
    comments: '',
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const sendEmail = (e ) => {
    e.preventDefault();
    

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform form submission or validation here
//     console.log(formData); // Display the form data in the console
//     // Reset the form after submission if needed
//     setFormData({
//         Correo: '',
//         Empresa: '',
//         'Nombre de Contacto': '',
//         service: '',
//         comments: '',
//     });
//   };

  return (
    <Box id="contact">
      <Container>
        <Typography variant="h4" sx={{ marginTop: '3em', textAlign: 'center' }}>
          Contacto
        </Typography>
        <Box
          component="form"
          sx={{
            marginTop: '1em',
            display: 'flex',
            justifyContent: 'center',
            '& > :not(style)': {
              m: 1,
            },
          }}
          onSubmit={sendEmail}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {inputsForm.map((input) => (
              <TextField
                key={input}
                name={input}
                value={formData[input]}
                onChange={handleChange}
                sx={{ margin: '1em' }}
                id="outlined-basic"
                label={input}
                variant="outlined"
              />
            ))}
            <TextField
              id="outlined-select-currency"
              select
              name="service"
              value={formData.service}
              onChange={handleChange}
              label="Servicios"
              defaultValue="Consulta"
              helperText="Por favor selecciona una opción"
              sx={{ margin: '1em' }}
            >
              {services.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-multiline-static"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              label="Consulta"
              multiline
              rows={4}
              sx={{ margin: '1em' }}
              variant="outlined"
            />
            <Button type="submit">Enviar</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
