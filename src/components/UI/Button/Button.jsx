import React from 'react'
import styles from './Button.module.scss'

const Button = ({props, text}) => {
    return (
        <button {...props} className={`${styles.button} ${props.className}`}>
            {text}
        </button>
    );
};

export default Button;