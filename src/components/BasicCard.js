import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';



export default function BasicCard(props) {
  return (
    <Paper id='cardServices' elevation={5}  sx={{  minWidth: '200px', cursor:'pointer',  margin:'2em',
    '&:hover':  {
      background:'#0c2441', 
      color:'white'
    } }}>
      <CardContent>
        <Typography variant="h5"   component="div" sx={{color:'#FF5733', overflowWrap: 'break-word', '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },}}>
        {props.title}
        </Typography>
        <Typography variant="body1" sx={{fontSize:'1.1em'}}>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions sx={{position:'relative', bottom:'0'}}>
        <Button size="small" href='#contact' >Más Info..</Button>
      </CardActions>
    </Paper>
  );
}