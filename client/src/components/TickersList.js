import Ticker from './Ticker';
import { Grid, makeStyles, Select, MenuItem, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getFilter, getTickers } from '../redux/exchange-monitoring/selectors';
import { useEffect, useState } from 'react';
import { getBlackListFromLocalStorage, setOrRemoveItemFromBlackList } from '../helpers/localeStorage';


const styles = makeStyles({
  list: {
    listStyle: 'none',
    padding: '0',
    },
    item: {
        width: '100%'
    }
});

function sortByField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

export default function TickersList() {
  const s = styles();
  const tickers = useSelector(getTickers)
  const filter = useSelector(getFilter)
  const [blackList, setBlackList] = useState(getBlackListFromLocalStorage)
  const [visibalTickers, setVisibalTickers] = useState(tickers)

  const sortTickers =  visibalTickers.slice().sort(sortByField(filter))

  const hideTicker = (field) => {
    if (blackList.includes(field)) return
    setOrRemoveItemFromBlackList(field)
    setBlackList([...blackList, field])
  }

  const handleChangeSelect = (event) => {
    setBlackList(blackList.filter((item) => item !== event.target.value));
    setOrRemoveItemFromBlackList(event.target.value)
  };

  useEffect(() => {
    setVisibalTickers(tickers.filter(({ ticker }) => !blackList.includes(ticker)))
  }, [tickers, blackList])
    
  return (
    <>
      <Typography>Show hiden tickers</Typography>
      <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value=''
          displayEmpty
          onChange={handleChangeSelect}
        >
          <MenuItem value="">
            <em>None</em>
        </MenuItem>
        {blackList.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      {tickers.length > 0 && (
        <Grid
          container
          component="ul"
          direction="column"
          justify="center"
          alignItems="center"
          className={s.list}
        >
          {sortTickers.map((ticker) => (
            <Grid item className={s.item} xs={12} key={ticker.ticker}>
              <Ticker tickerr={ticker} hideTicker={hideTicker} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

