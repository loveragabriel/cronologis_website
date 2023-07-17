import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SubmitAlert() {
  return (
    <Stack sx={{ width: '30%', position: 'fixed', top: '1em' }} spacing={2}>
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
