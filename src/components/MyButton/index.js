import React,{useContext} from 'react';
import '../../App.css';
import {ThemeContext} from '../../utils/ThemeContext';

export const MyButton = ({children})=>{
    const theme= useContext(ThemeContext);
    return(
        <div
        className= {`my button ${theme.theme==='light'? 'button-light':'button-dark'}`}
        role='button'
        >
            {children}
        </div>
    )
}