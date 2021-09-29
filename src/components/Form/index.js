import React,{useRef,useEffect, useState,useCallback} from 'react';
import {TextField, Button, List, listItem, ListItem} from '@material-ui/core';

function Form({onSumbit}){
    const [value,setValue] = useState('');
    const inputRef=useRef(null);
    const handleChange=useCallback((e)=>{
        setValue(e.target.value);
      },[])

    useEffect(()=>{
        inputRef.current.focus()
      },[])


    const handleSubmit=(event)=>{
    event.preventDefault();
    if(value)onSumbit(value);
    
    setValue('');
    inputRef.current.focus();
  }

    return(
    <form onSubmit={handleSubmit}>
     <TextField className="input" 
     value={value}
     onChange={handleChange}
     label="type the text"
     inputRef={inputRef}
      />
    <Button className="submit" type="submit" variant="contained" color="primary">Send</Button>
    </form>
  )
}
    

export default Form;