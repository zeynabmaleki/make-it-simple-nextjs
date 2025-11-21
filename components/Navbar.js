'use client'

import React,{useContext} from 'react'
import ThemeContext from '@/context/ThemeContext'

export default function Navbar() {
    const {theme , toggleTheme} = useContext(ThemeContext)

    return (
        <div className='flex flex-row gap-4 py-5 justify-center items-center z-10 bg-transparent'>
            <button>tutorials</button>
            <div>
                <input type='text' placeholder='search'/>
            </div>
            <div className='flex flex-row gap-4'>
                <button onClick={toggleTheme}>
                    {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                    </button>
                <button>sign in</button>
            </div>
            
        </div>
    )
}
