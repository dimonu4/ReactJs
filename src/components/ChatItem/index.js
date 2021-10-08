 import React from 'react';
 import {Link} from 'react-router-dom';
 import {ListItem} from '@material-ui/core';

 export const ChatItem = ({ chat }) =>{
     return (
         <ListItem>
             <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
         </ListItem>
     );
 };