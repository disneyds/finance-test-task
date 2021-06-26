import { Backdrop, Box, CircularProgress, makeStyles, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import HomePageTitle from '../components/Titles/HomePageTitle';
import { getLoadind } from '../redux/exchange-monitoring/selectors';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function HomePage() {
    
    const classes = useStyles();
    const loading = useSelector(getLoadind)
    
    
    return (
        <>
            <Paper  elevation={3}>
                <Box mt={16} p={3}>
                    <HomePageTitle/>
                </Box>
            </Paper>
            
            <Backdrop className={classes.backdrop} open={loading} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}
