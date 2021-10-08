import React from 'react';
import { List,ListItem, ListItemText } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import { ChatItem } from '../ChatItem';

const useStyles= makeStyles({
    root:{
        maxWidth:360,     
    }
})

function ChatList({chats}){
    const classes= useStyles();

    return(
        <div className={classes.root}>
        <List component="ul">
             {chats.map((chat)=>(
                 <ChatItem chat={chat} key={chat.id}/>
                // <ListItem key={i} button >
                //     <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                // </ListItem>
             ))} 
        </List>
        </div>
    )
}

export default ChatList;