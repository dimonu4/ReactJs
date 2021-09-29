import React,{useEffect, useRef, useState,useCallback} from 'react'
import './App.css';

// import {TextField, Button, List, listItem, ListItem} from '@material-ui/core';

import { ThemeProvider,useTheme,createMuiTheme } from '@material-ui/core/styles';
import {Routes} from './components/Routes';
// import {Link} from 'react-router-dom'

const theme= createMuiTheme({
  palette:{
      primary:{
          main:"#17af89",
      },
      secondary:{
          main:"#af6017",
      },
  },
});


function App() {

  // const [value,setValue] = useState('');
  // const inputRef=useRef(null);
    
  
  // const handleAddMessage=(event)=>{
  //   event.preventDefault();
  //   if(value){
  //     setMessageList((prevMessage)=>[
  //       ...prevMessage,
  //       {text:`${value}`,author:'Human',id:`mess${Date.now()}`}
  //     ])
  //   }
  //   setValue('');
  //   inputRef.current.focus();
  // }

  // const handleChange=(e)=>{
  //   setValue(e.target.value);
  // }

  // useEffect(()=>{
  //   inputRef.current.focus()
  // },[])

  

  return  (
    <ThemeProvider theme={theme}>

    <Routes/>
    {/* // <div className="App">
    //   <div className="chat_list">
    //   {chatsArray.map((chat)=> <ChatList key={chat.id} name={chat.name}/>)}
    //   </div>
    //   <div>
    //     <Form onSumbit={handleAddMessage} />
    //     {messageList.map((message,i)=><Message key={i} text={message} />)}
    //   </div>
    // </div> */}
    </ThemeProvider>
  );
}

export default App;
