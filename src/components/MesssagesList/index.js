import React from 'react';

function MessagesList({messages}){
    return(
        messages.map((message)=>(
            <div>message.text</div>
        ))
    )
}

export default MessagesList