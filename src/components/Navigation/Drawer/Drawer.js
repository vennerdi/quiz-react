import React, {Component} from 'react'
import classes from './Drawer.module.css'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        className={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.isOpen && this.props.isOpen) {
            this.setState({
                backdropShown: true
            })
            setTimeout(() => this.setState({
                backdropActivated: true,
            }), 10)
        } else if (prevProps.isOpen && !this.props.isOpen) {
            this.setState({
                backdropActivated: false
            })
            setTimeout(() => this.setState({
                backdropShown: false,
            }), 500)
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            backdropActivated: false,
            backdropShown: props.isOpen
        }
    }

    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        const links = [
            {to: '/', label: 'Список', exact: 'true'},
        ]

        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Создать тест', exact: 'false'})
            links.push({to: '/logout', label: 'Выйти', exact: 'false'})
        } else {
            links.push({to: '/auth', label: 'Авторизация', exact: 'false'})
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.state.backdropShown ?
                    <Backdrop onClick={this.props.onClose} activated={this.state.backdropActivated}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer