import Reat,{useEffect, useRef, useState,useCallback,useContext} from 'react';
import Form from '../Form';
import ChatList from '../chatList';
import { AUTHORS } from '../../utils/constant';
import Message from '../Message';
import {useParams,Redirect} from 'react-router-dom';
import { Button } from '@material-ui/core';
import {MyButton} from '../MyButton'
import {ThemeContext} from '../../utils/ThemeContext'

function Chats({ chats,setChats, messages, setMessages}){

  const theme = useContext(ThemeContext);

  const {chatId}=useParams();

       const sendMessage = useCallback((message)=>{
        setMessages((prevMess)=>({
          ...prevMess, 
          [chatId]:[...prevMess[chatId], message ]
      }))
      },[chatId])

      const handleAddMessage = useCallback(
        (text)=>{
          sendMessage({
            text,
            author:AUTHORS.Human,
            id:`mess-${Date.now()}`
          })
        },[chatId, sendMessage]
      )
    
      useEffect(()=>{
        let timeout;
        const curMess= messages[chatId];
        if(!!chatId && curMess?.[curMess.length-1]?.author===AUTHORS.Human){
        timeout= setTimeout(()=>{
          sendMessage({
            text:'Hi', 
            author:AUTHORS.Bot,
            id:`mess-${Date.now()}`
          })
          },1000)
        };
        return()=>clearTimeout(timeout)
      },[messages])
      
    

    if(!chatId ){
        return <Redirect to="/noChat"/>
    }

    let chekChatId=()=>{
      
      let count=0;
      chats.map((chat)=>{
        if(chat.id === chatId)
         count++
      })  
      if(count === 0){
         return true
      }
    }

    if(chekChatId()){
      return <Redirect to= "/falseChat"/>
    }

    // let deleteChat=()=>{
    //   let curChat =  chats.find(chat=>chat.id===chatId);
    //   let i= chats.indexOf(curChat);
    //   chats.splice(i,1)
    // }
       
    

    return(
    <div className="App">
    <ChatList chats={chats}/>
        <div>
          {!!chatId &&(
            <>
             <Form onSumbit={handleAddMessage} />
             {messages[chatId].map((message)=>(
               <Message message={message}/>
             ))}
             
         </>
         )}
         </div>
         <MyButton onClick={theme.changeTheme}>remove</MyButton>
         {/* <button onClick={deleteChat}>Remove chat</button> */}
    
    </div>
    )
}

export default Chats;