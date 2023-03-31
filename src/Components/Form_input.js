import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FormFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
        <TextField
          required
          id="User_name"
          label="Required"
          defaultValue="@Username"
          color="secondary" 
          focused 
        />
        <TextField
        required
          id="pass_word"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="e_mail"
          label="E-mail"
          type="E-mail"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}

export default FormFields;
