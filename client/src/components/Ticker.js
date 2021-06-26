import {
  Box,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Slide,
  Tooltip,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { TrendingUp, TrendingDown, Delete } from '@material-ui/icons';
import { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
    upColor: {
        color: 'green'
  },
    downColor: {
        color: 'red'
    },
}));

export default function Ticker({ tickerr, hideTicker }) {
  const { ticker, exchange, price, change, change_percent, dividend, yield: profitability, last_trade_time } = tickerr
  const classes = useStyles();
  const [changePrise, setChangePrise] = useState(0)
  const [up, setUp] = useState(true)

  useEffect(() => {
    if (price > changePrise) {
      setUp(true)
    } else { setUp(false) }
    setChangePrise(price)
  }, [price])

  return (
    <>
      <Slide in={true} direction="left" mountOnEnter unmountOnExit>
        <Paper elevation={3}>
          <Box mt={1}>
            <ListItem ContainerComponent="div">
              <Grid
                container
                spacing={1}
                justify="space-around"
                alignItems="center"
              >
                {up
                  ? (<ListItemIcon >
                      <TrendingUp fontSize="large" />
                  </ListItemIcon>)
                  : (<ListItemIcon >
                      <TrendingDown fontSize="large" />
                  </ListItemIcon>)
                }

                <ListItemText 
                  primary={<Typography>Ticker: {ticker}</Typography>}
                  secondary={
                    <Typography color="textSecondary">Exchange: {exchange}</Typography>
                  }
                />
                <ListItemText
                  primary={<Typography>Price: {price}</Typography>}
                  secondary={
                    <Typography color="textSecondary">Change: {change}</Typography>
                  }
                />
                <ListItemText
                  primary={<Typography>Change percent: 
                    <Typography className={up ? classes.upColor : classes.downColor} component='span' > 
                      {up ? '+' : '-'}{change_percent}%
                    </Typography>
                  </Typography>}
                  secondary={
                    <Typography color="textSecondary">Dividend: {dividend}</Typography>
                  }
                />
                <ListItemText
                  primary={<Typography>Last trade time: {last_trade_time}</Typography>}
                  secondary={
                    <Typography color="textSecondary">Yield: {profitability}</Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <Tooltip
                    title="Hide ticker"
                    aria-label="Hide ticker"
                    arrow
                  >
                    <IconButton onClick={() => hideTicker(ticker)}>
                      <Delete color="error" />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction> 
              </Grid>
            </ListItem>
          </Box>
        </Paper>
      </Slide>
    </>
  )
}
