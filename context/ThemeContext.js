'use client'

import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        setMounted(true)
    }, [theme])

    const toggleTheme = () => {
        setTheme((curr) => curr === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {mounted ? children : null}
        </ThemeContext.Provider>
    )
}

export default ThemeContext