import * as React from 'react';
import { useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import ButtonAppBar from './ButtonAppBar';
import BasicCard from './BasicCard';
import BasicTable from './BasicTable';


export default function UserPage(props) {
  
  return (
    <div>
      <BasicCard/>
      <BasicTable list={props.list} userData={props.userData}/>
    </div>
  );
}