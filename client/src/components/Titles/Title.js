import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function Title({ text }) {
        
return  <Box mb={3}>
  <Grid
    container
    justify="space-evenly"
    alignItems="center"
  >
    <Typography variant="h3" component="h2">
      {text}
    </Typography>
  </Grid>
</Box>
    
}
