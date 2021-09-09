import React,{useState} from 'react';

export function Counter(){
    const [count,setCount] = useState(0);

    const updateCount= ()=>{
        setCount((prevCount)=>{
            return prevCount + 1
        });
    }

    return(
        <div>
        <span className="counter">{count}</span>
        <button classsName="counter-button" onClick={updateCount}>CLick</button>
        </div>
    )
}