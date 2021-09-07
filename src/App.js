import React,{useEffect, useState} from 'react'
import './App.css';
import Message from './components/Message';

function App() {
  const [messageList,setMessageList] = useState( [] );
  const [value,setValue] = useState('');

  
  const handleAddMessage=(event)=>{
    event.preventDefault();
    if(value){
      setMessageList((prevMessage)=>[
        ...prevMessage,
        {text:`${value}`,author:'Human'}
      ])
    }
    
  }

  const handleChange=(e)=>{
    setValue(e.target.value);
  }

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
    <div className="App">
      <form onSubmit={handleAddMessage}>
        <input className="input" value={value} onChange={handleChange} placeHolder="Hello"></input>
        <input className="submit" type="submit" value= "Send"></input>
      </form>
      {messageList.map((message,i)=><Message key={i} text={message} />)}
    </div>
  );
}

export default App;
