import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = (props) => {
    return (
        <div className={[classes.Backdrop, props.activated ? classes.active : null].join(' ')}
             onClick={props.onClick}></div>
    )
}

export default Backdrop