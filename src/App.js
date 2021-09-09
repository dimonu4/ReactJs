import React,{useEffect, useRef, useState} from 'react'
import './App.css';
import Message from './components/Message';
import {TextField, Button, List, listItem, ListItem} from '@material-ui/core';
import ChatList from './components/chatList';
import { ThemeProvider,useTheme,createMuiTheme } from '@material-ui/core/styles';

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
  const [messageList,setMessageList] = useState( [] );
  const [value,setValue] = useState('');
  const inputRef=useRef(null);
  const[chatsArray,setChatsArray]=useState([
    {id:1,name:"firstChat"},
    {id:2,name:"secondChat"},
    {id:3,name:"thirdChat"},
  ])
    
  const handleAddMessage=(event)=>{
    event.preventDefault();
    if(value){
      setMessageList((prevMessage)=>[
        ...prevMessage,
        {text:`${value}`,author:'Human',id:`mess${Date.now()}`}
      ])
    }
    setValue('');
    inputRef.current.focus();
  }

  const handleChange=(e)=>{
    setValue(e.target.value);
  }

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  useEffect(()=>{
    if(messageList[messageList.length-1]?.author==='Human'){
    setTimeout(()=>{
      setMessageList((prevMessage)=>[
        ...prevMessage,
        {text:'Hi', author:'Bot'}
      ])
      },1000)
    }
  },[messageList])
  

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div className="chat_list">
      {chatsArray.map((chat)=> <ChatList key={chat.id} name={chat.name}/>)}
      </div>
      <div>
      <form onSubmit={handleAddMessage}>
        <TextField className="input" value={value} onChange={handleChange}
        label="type the text"
        inputRef={inputRef}
        />
        <Button className="submit" type="submit" variant="contained" color="primary">Send</Button>
      </form>
      {messageList.map((message,i)=><Message key={i} text={message} />)}
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
