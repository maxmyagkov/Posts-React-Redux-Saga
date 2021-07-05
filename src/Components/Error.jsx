import React from 'react'

function Error({ text }) {
    return (
        <div className="alert alert-danger mt-2" role="alert">
            {text}
        </div>
    )
}

export default Error
