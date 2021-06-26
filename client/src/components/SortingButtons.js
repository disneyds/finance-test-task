import React from 'react';
import { Box, Button, ButtonGroup, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getTickers } from '../redux/exchange-monitoring/selectors';
import { changeFilter } from '../redux/exchange-monitoring/operations';

const useStyles = makeStyles(() => ({
    button: {
        width: '140px'
    },
}));

export default function SortingButtons() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const tickers = useSelector(getTickers)
  const filter = useSelector(getFilter)
  const sortingFields = Object.keys(tickers[0])
  return (
    <Box p={3}>
      <ButtonGroup
        fullWidth
        variant="text"
        aria-label="text primary button group"
        >
              
        {sortingFields && sortingFields.map((field) => (
            <Button
                key={field}
                className={classes.button}
                variant={field === filter ? 'contained' : 'text'}
                onClick={() => {
                    dispatch(changeFilter(field))
                }}
            >
                {field}
            </Button>
        ))}
       
      </ButtonGroup>
    </Box>
  );
}