import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SubmitAlert() {
  return (
    <Stack sx={{ width: '50%', position: 'fixed', top: '1em' }} spacing={2}>
      <Alert variant="filled" severity="success">
        Consulta enviada con éxito!
      </Alert>
    </Stack>
  );
}
