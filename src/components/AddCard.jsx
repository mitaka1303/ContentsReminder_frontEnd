import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { addRow } from '../Api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function AddCard(props) {
    const [title, setTitle] = useState(null);
  return (
    <Modal
        open={props.displayAddCard}
        onClose={()=>{props.setDisplayAddCard(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Card sx={style}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            new
        </Typography>
        <TextField
          id="outlined-password-input"
          label="タイトル"
          type="password"
          autoComplete="current-password"
          onChange={(e)=>{setTitle(e.target.value)}}
        /> 
        <Button id="send" variant="contained" onClick={()=>{addRow(props.userData[0], props.userData[1], title)}} sx={{margin:2}}>登録</Button>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Modal>
  );
}