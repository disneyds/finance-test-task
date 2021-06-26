import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Container, CssBaseline} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";
import './App.css';
import Header from './components/Header';
import Routes from './routes/Routes';
import { io } from "socket.io-client";
import {updateData} from './redux/exchange-monitoring/operations'

  const socket = io("http://localhost:4000");
  socket.emit('start');

export default function App() {
  const dispatch = useDispatch()
  const localTheme = JSON.parse(localStorage.getItem('theme'))
  const theme = localTheme === null ? false : localTheme
  const [darkState, setDarkState] = useState(theme)
  const palletType = darkState ? "dark" : "light"
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500]
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500]
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  })

  socket.on('ticker', function (response) {
    const res = Array.isArray(response) ? response : [response];
    dispatch(updateData(res))
  })
 

  const handleThemeChange = () => {
    JSON.stringify(localStorage.setItem('theme', !darkState))
    setDarkState(!darkState);
  }

  return <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>

      <Container>
        <Header darkState={darkState} handleThemeChange={handleThemeChange}/>
        <Routes />
      </Container>

    </ThemeProvider>
  </>
}


