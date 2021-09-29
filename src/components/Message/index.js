import React from 'react';


function Message({message}){
    return (
        <div className="message" key={message.id}>
            <div>New message:<span className="message_text"> {message.text}</span> from: {message.author}</div>
        </div>
    );
}

export default Message