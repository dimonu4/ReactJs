import React,{useEffect, useRef, useState, useCallback} from 'react'
import './App.css';
import { ThemeProvider,useTheme,createMuiTheme } from '@material-ui/core/styles';
import {Routes} from './components/Routes';
import {ThemeContext} from './utils/ThemeContext'
import { Provider } from 'react-redux';
import { store } from './store';

// const theme= createMuiTheme({
//   palette:{
//       primary:{
//           main:"#17af89",
//       },
//       secondary:{
//           main:"#af6017",
//       },
//   },
// });



function App() {

  const [theme,setTheme] = useState('light');
  const changeTheme = useCallback( () => {
    setTheme( (prevTheme) => (prevTheme === 'light'? 'dark': 'light') )
  },[])

  return  (
    // <ThemeProvider theme={theme}>
    <Provider store={store}>
    <ThemeContext.Provider value={ {theme, changeTheme} }>
    <Routes/>
    </ThemeContext.Provider>
    </Provider>
    // </ThemeProvider>
  );
}

export default App;
