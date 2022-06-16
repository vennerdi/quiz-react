import React from 'react'
import classes from './Loader.module.css'

const Loader = props => {
    const div = <div className={classes.center}>
        <div className={classes.Loader}>
            <div /><div />
        </div>
    </div>;

    return div
}

export default Loader