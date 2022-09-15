import { Grid } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Container } from '@mui/system'
import Widget from '../components/widget/Widget'
import Questions from '../components/Question/Questions'

const Questionpage = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={7}>
          
          <Questions questionHead={"All Questions"}/>
        </Grid>
        <Grid item md={3}>
          <Widget />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Questionpage