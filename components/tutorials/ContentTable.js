'use client'

import React, { useState, useEffect } from 'react'
import MenuOverlay from './MenuOverlay'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function ContentTable({ groups = {} }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    const topics = Object.keys(groups) // category names from posts folder
    useEffect(() => {
        if (!selected && topics.length) setSelected(topics[0])
    }, [topics, selected])

    return (
        <div className="space-y-2">
            {topics.map((title) => (
                <div className='text-purple-700' key={title}>
                    <button
                        className='flex w-full justify-between items-center gap-4 text-left px-3 py-2 hover:bg-purple-50 rounded'
                        onClick={() => {
                            const willOpen = selected === title ? !menuOpen : true
                            setSelected(title)
                            setMenuOpen(willOpen)
                        }}
                    >
                        <span>{title}</span>
                        {selected === title && menuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>

                    {selected === title && menuOpen && (
                        <div className="mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded border overflow-hidden">
                            <MenuOverlay posts={groups[title] || []} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
