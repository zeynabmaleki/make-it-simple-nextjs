import React from 'react'
import Link from 'next/link'


export default function ContentTable() {
    return (
        <section>
            <ul className='flex flex-col gap-4'>
                <Link href='/'>theme toggle</Link>
                <Link href='/'>2</Link>
                <Link href='/'>3</Link>
                <Link href='/'>4</Link>
            </ul>
        </section>
    )
}
