import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { deleteRow } from '../Api';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddCard from './AddCard';
import { useState } from 'react';

function createNewData(id, title, checked) {
  return { id, title, checked };
}

export default function BasicTable(props) {
  const [displayAddCard, setDisplayAddCard] = useState(false);
  let rows = [
    createNewData(100,'title', true)
  ];
  if(props.list){
    rows = props.list.map((obj)=>{return createNewData(obj.id, obj.title, obj.checked)})
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>タイトル</TableCell>
            <TableCell align="right"><IconButton color="primary" aria-label="upload picture" component="label" onClick={()=>{setDisplayAddCard(!displayAddCard)}}>
        < AddIcon/>
      </IconButton></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right"><Button id={row.id} variant="contained" onClick={()=>{deleteRow( props.userData[0],props.userData[1], row.id)}}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddCard displayAddCard={displayAddCard} setDisplayAddCard={setDisplayAddCard} userData={props.userData}/>
    </TableContainer>
  );
}