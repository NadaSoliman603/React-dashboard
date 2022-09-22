import React, { useContext, useState } from 'react'
import { createContext } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};


export const ContextProvider = ({children})=>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (e)=>{
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode' ,e.target.value )
            setThemeSettings(false)
    }
    const setColor = (value)=>{
        setCurrentColor(value)
        localStorage.setItem('colorMode' ,value )
        setThemeSettings(false)
    }
    return (
        <StateContext.Provider value={{setColor ,setMode , isClicked, setIsClicked ,currentMode, setCurrentMode,currentColor, setCurrentColor , setThemeSettings , themeSettings , activeMenu , setActiveMenu , screenSize, setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext)
