'use client'

import React, { useContext } from 'react'
import ThemeContext from '@/context/ThemeContext'


export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
    )
}
