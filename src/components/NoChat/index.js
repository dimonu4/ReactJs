import React from "react";
import ChatList from "../chatList";

export default function NoChat({chats}){
    return(
        <>
        <ChatList chats={chats}/>
        <span>Please select a chat</span>
        </>
    )
}