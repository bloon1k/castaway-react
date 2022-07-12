import React from 'react'
import './Button-styles.module.scss'

const Button = ({props, text}) => {
    return (
        <button {...props}>
            {text}
        </button>
    );
};

export default Button;