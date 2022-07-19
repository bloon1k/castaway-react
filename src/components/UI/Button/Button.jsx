import React from 'react'
// Styles
import styles from './Button.module.scss'

const Button = ({props, text}) => {
    return (
        <button {...props} className={`${styles.button} ${props.className}`}>
            {text}
        </button>
    )
}

export default Button