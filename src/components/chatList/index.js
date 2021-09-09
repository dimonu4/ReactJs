import React from 'react';
import { List,ListItem, ListItemText } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles= makeStyles({
    root:{
        maxWidth:360,
        
    }
})

function ChatList({name}){
    const classes= useStyles();
    return(
        <div className={classes.root}>
        <List component="ul">
            <ListItem button>
               <ListItemText primary={name} />
            </ListItem>

        </List>
        </div>
    )
}

export default ChatList;