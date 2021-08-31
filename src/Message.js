import './App.css';

function Message(props){
    return (
        <div className="message">
            <p>messeage is:<span className="message_text">{props.text} {props.number}</span></p>
        </div>
    );
}

export default Message