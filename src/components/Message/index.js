import React from 'react';


function Message({text}){
    return (
        <div className="message">
            <div>New message:<span className="message_text"> {text.text}</span> from: {text.author}</div>
        </div>
    );
}

export default Message