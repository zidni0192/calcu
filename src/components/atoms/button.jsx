import React from 'react'
import './button.css'
export default function Button({ onClick, text }) {
    return (
        <button onClick={onClick} className="default_button">
            {text}
        </button>
    )
}
