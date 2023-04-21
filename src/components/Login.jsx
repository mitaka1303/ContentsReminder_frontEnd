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



export default function Login(props) {
  const [ formData, setFormData ] = useState();
  function changeFormData(e, i){
    props.changeUserData(i, e)
  }
  if(props.visibleLogin&&props.visibleLogin!=null){
  return (
    <CssVarsProvider>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>ログイン</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>ユーザー名</FormLabel>
            <Input onChange={(e)=>changeFormData(e.target.value, 1)}
              // html input attribute
              name="email"
              type="email"
              placeholder="user name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>パスワード</FormLabel>
            <Input onChange={(e)=>changeFormData(e.target.value, 2)}
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
    </CssVarsProvider>
  );
        }else{
          return <div></div>
        }
}