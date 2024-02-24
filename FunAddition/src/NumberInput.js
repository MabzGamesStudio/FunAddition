import React, { useState } from 'react';
import './NumberInput.css';

function NumberInput(props) {
    const [isEditing, setIsEditing] = useState(false);
    //const [text, setText] = useState(props.initialValue);
    const [text, setText] = useState(props.initialValue);

    const handleMouseEnter = () => {
        setIsEditing(true);
    };

    const handleMouseLeave = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {

        // Strip any non numeric characters
        e.target.value = e.target.value.replace(/\D/g, '');

        // Strip leading 0s if any
        e.target.value = e.target.value.replace(/^0+/, '');

        // Set value to 0 instead of blank
        if (e.target.value === '') {
            e.target.value = '0';
        }

        setText(e.target.value);
    };

    return (
        <div className="container">
            {isEditing ? (
                <input
                    className='InputField'
                    type="text"
                    value={text}
                    onChange={handleChange}
                    onMouseLeave={handleMouseLeave}
                    autoFocus // Automatically focuses on the input field
                />
            ) : (
                <p className='Text' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {text}
                </p>
            )}
        </div>
    );
}

export default NumberInput;