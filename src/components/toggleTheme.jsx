import React,{useContext} from 'react'
import { ThemeContext } from '../contexts/themeContext'

const ToggleTheme = () => {
    const {ToggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <button onClick = {ToggleTheme}>Night Mode</button>
        </div>
    )
}

export default ToggleTheme
