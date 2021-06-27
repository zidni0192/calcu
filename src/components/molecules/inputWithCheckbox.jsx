import React from 'react'
import Checkbox from '../atoms/checkbox'
import Input from '../atoms/input'
import './inputWithCheckbox.css'

export default function InputWithCheckbox({ onValueChanged, onCheckChanged }) {
    return (
        <div className="wrapper_input_with_checkbox">
            <Input type="number" onChange={(e) => onValueChanged(e.target.value)} />
            <Checkbox onClick={(e) => onCheckChanged(e.target.checked)} />
        </div>
    )
}
