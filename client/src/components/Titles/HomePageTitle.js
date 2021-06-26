import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function HomePageTitle() {
  return <Box p={3}>
    <Grid
      container
        justify="space-evenly"
        alignItems="center"
    >
        <Box mb={5}><Typography variant="h3" component="h2"> Welcome! </Typography></Box>
        <Box mb={2}><Typography variant="h4" component="p"> My name is Aleksander and this is my test assignment at "inCode group". </Typography></Box>
        <Typography variant="h4" component="p"> Glad to see you here and wish you a pleasant viewing! </Typography>
    </Grid>
  </Box>
}