import React , {useContext} from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import { store } from '../../store';
import { toggleShowName } from '../../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '@material-ui/core';

export const Profile = ()=>{
    const theme = useContext(ThemeContext);
    // const state = store.getState();
    const showName = useSelector((state)=>state.showName)
    
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(toggleShowName)
    };

    return(
        <>
        <Checkbox value={showName} checked={showName} onChange={handleClick}/>
        <button onClick={theme.changeTheme}>Change Theme</button>
        <button onClick={handleClick}>Toggle show name</button>
        {showName && <div>Show name is true</div>}
        <h3 style={{color: theme.theme === 'light'? 'gray': 'red'}}>This is profile page</h3>
        </>
    )
}