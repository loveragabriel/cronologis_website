import React, { Fragment } from 'react'
import { Box } from '@mui/material';
import Link from '@mui/material/Link/Link';

export default function TapeCard(prop) {
    return (
        <Fragment>
            <Box
                sx={{
                    display: 'flex',
                    width: 300,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '0.4em',
                    color: 'white',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                        transition: 'all 1s ease-out'
                    },
                }}
            >
                <Link href='#cardServices' sx={{ color: 'white', textDecoration: 'none' }}>
                    {prop.TapeServices}
                </Link>

            </Box>
        </Fragment>
    )
}
