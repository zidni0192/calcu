import React from 'react'
import './checkbox.css'
export default function Checkbox(props) {
    return (
        <input type="checkbox" {...props} className="default_checkbox" />
    )
}
