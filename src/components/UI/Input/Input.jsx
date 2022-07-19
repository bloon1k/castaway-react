import React from 'react'
// Styles
import styles from './Input.module.scss'

const Input = ({props}) => {
    return (
        <input type="text" {...props} className={`${styles.input} ${props.className}`}/>
    )
}

export default Input