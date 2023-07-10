import React, { Fragment } from 'react'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

export default function TapeCard(prop) {
    return (
        <Fragment>
            <Box
                sx={{
                    display:'flex',
                    width: 300,
                    height: 100,
                    alignItems:'center',
                    justifyContent: 'center',
                    textAlign:'center',
                    padding:'0.5em',
                    color:'white',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <Typography>
                    {prop.TapeServices}
                </Typography>
            </Box>
        </Fragment>
    )
}
