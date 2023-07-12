import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard(props) {
  return (
    <Card id='cardServices'  sx={{ minWidth:275, cursor:'pointer', '&:hover':  {
      background:'#0c2441', 
      color:'white'
    } }}>
      <CardContent>
        <Typography variant="h4" component="div" sx={{color:'#FF5733'}}>
        {props.title}
        </Typography>
        <Typography variant="body1" sx={{fontSize:'1.3em'}}>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions sx={{position:'relative', bottom:'0'}}>
        <Button size="small" href='#contact' >Más Info..</Button>
      </CardActions>
    </Card>
  );
}