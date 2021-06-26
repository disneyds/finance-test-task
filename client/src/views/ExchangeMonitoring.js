import { Backdrop, Box, CircularProgress, Grid, makeStyles, Paper } from '@material-ui/core';
import TickersList from '../components/TickersList'
import SortingButtons from '../components/SortingButtons';
import Title from '../components/Titles/Title';
import { useSelector } from 'react-redux';
import { getLoadind } from '../redux/exchange-monitoring/selectors';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function Monitoring() {
    const classes = useStyles();
    const loading = useSelector(getLoadind)

    return (
        <>
            <Paper  elevation={3}>
                <Box mt={9} p={3}>
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                    >
                    <Title text="Exchange Monitoring"/>
                    <SortingButtons/>
                    <TickersList/>
                </Grid>
                </Box>
            </Paper>
            
            <Backdrop className={classes.backdrop} open={loading} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}
