import React from 'react'

export default async function ProductId({ params }) {
    const { id } = await params

    return (
        <div>
            <h1>Product id page: {id}</h1>
        </div>
    )
}
