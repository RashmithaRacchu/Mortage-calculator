
import React from "react"
import Navbar from "./components/Navbar"
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid } from "@mui/material";
import { useState } from "react";



function App() {
  //name,function
  const [data,setData] =useState({
    homeValue:3000,
    downPayment:3000,
    loanAmount:3000,
    loanTerm:5,
    interestRate:5
  }

  )

  //console.log(a)
  //setA(30)
  //const x=10
  //x=20

  return (
    <div className="App">
      <Navbar />
     
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
          <SliderSelect  data={data} setData={setData}/>
          <TenureSelect data={data} setData={setData}/>
          </Grid>
<Grid item xs={12} md={6}>
<Result data={data}/>
</Grid>    
        </Grid>
      </Container>
    </div>
  );
}

export default App;
