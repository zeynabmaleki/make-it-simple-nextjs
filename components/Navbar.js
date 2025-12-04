import React from 'react'
import Link from 'next/link'
import ThemeToggleButton from './buttons/ThemeToggleButton'

export default function Navbar() {
    return (
        <section className='relative z-11'>
            <nav className='flex flex-row gap-4 py-5 px-20 justify-between items-center backdrop-blur-md text-xl fixed top-0 right-0 left-0 bg-base-100 text-base-content'>
                <div className='flex flex-row gap-8'>
                    <Link href='/tutorials' className='link link-hover'>tutorials</Link>
                    <Link href='/' className='text-primary font-bold'>LOGO</Link>
                </div>

                <div>
                    <input type='text' placeholder='search' className='input input-bordered input-sm' />
                </div>
                <div className='flex flex-row gap-8'>
                    <ThemeToggleButton />
                    <button className='btn btn-primary btn-sm'>sign in</button>
                </div>
            </nav>
        </section>
    )
}
