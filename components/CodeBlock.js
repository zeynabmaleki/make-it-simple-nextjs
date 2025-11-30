'use client'
import { useState } from 'react'

export default function CodeBlock({ children = '', language = 'text' }) {
    // declares the component, accepts children (the code string) 
    // and an optional language prop with defaults.
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            const text = typeof children === 'string' ? children : String(children)
            // ensures the code to copy is a string (handles different children types).
            await navigator.clipboard.writeText(text)
            // writes the string to the system clipboard (browser API).
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            // ignore copy errors silently
        }
    }

    return (
        <div className="relative my-4">
            <button
                onClick={handleCopy}
                aria-label="Copy code"
                className="absolute right-2 top-2 z-10 rounded bg-gray-100 px-3 py-1 text-sm shadow hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>

            <pre className="overflow-auto rounded border bg-gray-50 p-4 text-sm dark:bg-gray-900">
                <code>
                    {children}
                </code>
            </pre>
        </div>
    )
}