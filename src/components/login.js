import React from 'react';
import {Avatar, Grid,Paper, TextField, Checkbox, FormControlLabel, Button, Typography, Link} from '@mui/material';
import { Height, Margin } from '@mui/icons-material';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';

const Login=()=>{
    const paperStyle={padding: 20,height:'60vh',width:400,margin:'20px auto'}
    const avatarStyle={backgroundColor:'#873d3de3'}
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const buttonStyle = {margin: '8px 0', backgroundColor:'#873d3de3'}
    const linkStyle = {margin: '8px 0'}
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <EmojiFoodBeverageOutlinedIcon />
            </Avatar>
            <h1>Sign In</h1>
          </Grid>
          <TextField label="username" fullWidth required />
          <TextField label="password" type="password" fullWidth required />
          <FormControlLabel
            control = {
              <Checkbox
                name = "checkedB"
                color = "primary"
              />
            }
            label = "Remember me"
          />
          <Button type = 'submit' variant = 'contained' style = {buttonStyle} fullWidth>Sign In</Button>
          <Typography style = {linkStyle}>
            <Link href="#">
              <body>Forgot Password?</body>
            </Link>
          </Typography>
          <Typography> 
            <Link href="#"> 
              <body>Sign Up </body>
            </Link>
          </Typography>
        </Paper>
      </Grid>
    );
}
export default Login