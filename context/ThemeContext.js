'use client'

import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Read from localStorage on mount
        const saved = localStorage.getItem('theme') || 'dark'
        setTheme(saved)
        document.documentElement.setAttribute('data-theme', saved)
        setMounted(true)
    }, [])

    useEffect(() => {
        // Update whenever theme changes
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
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