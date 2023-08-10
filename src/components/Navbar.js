import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Container } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5" component="p" >
            BANK OF REACT
          </Typography>
  
        </Toolbar>
        </Container>
      </AppBar>
    
  )
}

export default Navbar