<div className="App">
  <Navbar />
  <Container maxWidth="xl" sx={{marginTop:4}}>
    <Grid container spacing={5} alignItems="center">
      <Grid item xs={12} md={6}>
        <SliderSelect />
        <TenureSelect />
      </Grid>
      <Grid item xs={12} md={6}>
        <Result/>
      </Grid>
    </Grid>
  </Container>
</div>