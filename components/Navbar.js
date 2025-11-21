import React from 'react'
import Link from 'next/link'
import ThemeToggleButton from './buttons/ThemeToggleButton'


export default function Navbar() {
    return (
        <nav className='flex flex-row gap-4 py-5 px-20 justify-between items-center z-10 bg-transparent text-xl'>
            <div className='flex flex-row gap-8'>
                <Link href='/'>LOGO</Link>
                <Link href='/tutorials'>tutorials</Link>
            </div>

            <div>
                <input type='text' placeholder='search' />
            </div>
            <div className='flex flex-row gap-8'>
                <ThemeToggleButton />
                <button>sign in</button>
            </div>
        </nav>
    )
}
