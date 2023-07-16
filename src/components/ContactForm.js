import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Container } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import emailjs from '@emailjs/browser';
import SubmitAlert from './SubmitAlert';
import { useEffect } from 'react';
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;




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

const inputsForm = ['Nombre', 'Empresa'];

export default function ContactForm() {
  const [emailValidation, setValidationEmail] = useState('');
  const [displayAlert, setDisplayAlert] = useState('')
  const [formData, setFormData] = useState({
    Correo: '',
    Empresa: '',
    Nombre: '',
    service: '',
    comments: '',
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.Correo)) {
      setValidationEmail(true)
      return
    } else {
      emailjs
        .sendForm(serviceId, templateId, e.target, userId)
        .then((result) => {
          console.log(result.text);
          setValidationEmail(false)
          setFormData({
            Correo: '',
            Empresa: '',
            Nombre: '',
            service: '',
            comments: '',
          });
          setDisplayAlert(true)
        })

        .catch((error) => {
          console.log(error.text);
        });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setDisplayAlert(false);
    }, 3000);
  }, [displayAlert]);
  return (
    <Box id="contact"
      sx={{
      }} >
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
              key='Correo'
              name='Correo'
              value={formData.Correo}
              onChange={handleChange}
              sx={{ margin: '1em' }}
              id="outlined-basic"
              label='Correo'
              variant="outlined"
              helperText={emailValidation && (<Typography variant="span" sx={{ color: 'red' }}>
                Ingrese una dirección de Correo Electrónico
              </Typography>)}
            />


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
      {displayAlert && (<SubmitAlert />)}
    </Box>
  );
}
