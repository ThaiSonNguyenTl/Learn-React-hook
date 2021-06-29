import React, {createContext,useState} from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState({
        isLightTheme: true,
        dark: {
            background: '#000',
            color:'#fff'
        },
        light: {
            background: '#fff',
            color:'#000'
        }
    })
    // function toggle theme
    const ToggleTheme = () => {
        setTheme({
            ...theme,
            isLightTheme:!theme.isLightTheme
        })
    }
    // context data
    const themeContextData = {theme,ToggleTheme}
    // return provider
    return(
        <ThemeContext.Provider value = {themeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider