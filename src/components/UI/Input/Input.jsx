import React from 'react'
import styles from './Input.module.scss'

const Input = ({props}) => {
    return (
        <input type="text" className={styles.input} {...props} {...props.reg}/>
    );
};

export default Input;