import React from 'react';
import paths from '../routes/paths';
import { useHistory, useLocation } from 'react-router';
import { Box, Button, ButtonGroup, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    button: {
        width: '100px'
    },
}));

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Box p={3}>
      <ButtonGroup
        fullWidth
        variant="text"
        aria-label="text primary button group"
      >
        <Button
          className={classes.button}
          variant={pathname === paths.HOME ? 'contained' : 'text'}
          onClick={() => {
            history.push(paths.HOME);
          }}
        >
          HomePage
        </Button>

        <Button
          className={classes.button}
          onClick={() => {
            history.push(paths.EM);
          }}
          variant={pathname === paths.EM ? 'contained' : 'text'}
        >
        monitoring
        </Button>
      </ButtonGroup>
    </Box>
  );
}