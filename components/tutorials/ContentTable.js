'use client'

import React, { useState } from 'react'
import MenuOverlay from './MenuOverlay'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



// const topics: {
//     {
//     title:"React js",
//         path:
// },
// {
//     title:"Next js",
//         path:
// }
// ,
// {
//     title:"tailwind css",
//         path:
// }

// }

export default function ContentTable({ posts = [] }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const topics = ["React js", "Next js", "tailwind css"]

    return (
        <div>
            <div>
                {topics.map((title, index) => (
                    <div key={index}>

                        {!menuOpen ? (

                            <button onClick={() => setMenuOpen(true)} >
                                {title}
                                <IoIosArrowDown />
                            </button>
                        ) : (
                            <button onClick={() => setMenuOpen(false)} >
                                {title}
                                <IoIosArrowUp />
                            </button>
                        )}
                    </div>
                ))}

            </div>

            {menuOpen ?
                <div >
                    <MenuOverlay posts={posts} />
                </div>
                : null}

        </div>
    );
}
