import React,{useState} from 'react';
import {BrowserRouter,Switch, Route,Link} from 'react-router-dom';
import {AUTHORS} from '../../utils/constant'
import Chats from '../chats'
import Home from '../Home'
import NoChat from '../NoChat'

const initialMessages= {
    "chat-1":[
      {text:'message from chat-1', author:AUTHORS.Bot, id: 'mess-1'}
    ],
    "chat-2":[]
    };

// const initialChats= {
//         id1:{
//             name:'Chat-1',
//             messages:[{text:"FirstMessage from chat-1", author:AUTHORS.Bot, id:"mess-1"}
//         ,{text:"SecondMessage from chat-1", author:AUTHORS.Bot, id:"mess-3"}
//     ]
//         },
//         id2:{
//             name: 'Chat-2',
//             messages:[{text:'FirstMessage from chat-2', author:AUTHORS.Bot, id:"mess-2"}]
//         }
//       };

export const Routes= ()=>{
    
    const [messages, setMessages] = useState(initialMessages)
    const initialChats=[{id:"chat-1", name:"Chat-1"},{id:"chat-2", name:"Chat-2"}]
    const [chats, setChats] = useState(initialChats)
    return(
        <BrowserRouter>
                <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/chats'>Chat</Link>
            </li>
          </ul>
        </header>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            
            <Route path="/chats/:chatId?">
                <Chats chats={chats} setChats={setChats} messages={messages} setMessages={setMessages}/>
            </Route>
            <Route path= "/noChat">
                <NoChat chats={chats}/>
            </Route>
            <Route>
                <h4>404</h4>
            </Route>
        </Switch>
        </BrowserRouter>
    )
} 