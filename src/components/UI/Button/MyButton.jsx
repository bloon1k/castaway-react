import React from 'react'
import './Button-styles.module.scss'

const MyButton = ({props, text}) => {
    return (
        <button {...props}>
            {text}
        </button>
    );
};

export default MyButton;