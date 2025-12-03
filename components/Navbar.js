import React from 'react'
import Link from 'next/link'
import ThemeToggleButton from './buttons/ThemeToggleButton'


export default function Navbar() {
    return (
        <section className='relative z-11'>
            <nav className='flex flex-row gap-4 py-5 px-20 justify-between items-center backdrop-blur-md text-xl fixed top-0 right-0 left-0'>
                <div className='flex flex-row gap-8'>
                    <Link href='/tutorials'>tutorials</Link>
                    <Link href='/'>LOGO</Link>
                </div>

                <div>
                    <input type='text' placeholder='search' />
                </div>
                <div className='flex flex-row gap-8'>
                    <ThemeToggleButton />
                    <button className='my_btn'>sign in</button>
                </div>
            </nav>
        </section>
    )
}
