'use client'

import React, { useState } from 'react'
import MenuOverlay from './MenuOverlay'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function ContentTable({ groups = {} }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    const topics = Object.keys(groups) // category names from posts folder
    // optionally set a default selected
    React.useEffect(() => {
        if (!selected && topics.length) setSelected(topics[0])
    }, [topics, selected])

    return (
        <div>
            <div>
                {topics.map((title) => (
                    <div key={title}>
                        <button
                            className='flex flex-row gap-4 justify-center items-center  p-2 text-left '
                            onClick={() => {
                                setSelected(title)
                                setMenuOpen(open => (selected === title) ? !open : true)
                            }}
                        >
                            {title}
                            {selected === title && menuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                    </div>
                ))}
            </div>

            {menuOpen && selected && (
                <div>
                    <MenuOverlay posts={groups[selected] || []} />
                </div>
            )}
        </div>
    );
}
