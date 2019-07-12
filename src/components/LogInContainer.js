import React, { Component } from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import { getUser } from '../actions/users'
import './LogInContainer.css'


class LoginContainer extends Component {
    state = {
        userName: '',
        password: '',
        passwordConfirmation: '',
        option: 'LOG_IN'
    }

    url = 'https://connect4-the-best-game.herokuapp.com'
    // url = 'http://localhost:5000'

    onChange = (event) => {
        const { value } = event.target
        const key = event.target.name

        this.setState({ [key]: value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const { userName } = this.state
        const { password } = this.state
        const { passwordConfirmation } = this.state

        this.setState({ userName: '', password: '' })

        if (this.state.option === 'SIGN_IN') {
            if (password !== passwordConfirmation) {
                alert("Password confirmation must match Password")
            } else {
                request
                    .post(`${this.url}/users`)
                    .send({ userName, password })
                    .then(res => {
                        this.props.getUser(userName)
                        this.props.history.push(`/rooms`)

                    })
                    .catch(error => console.log(error))
            }
        } else {
            request
                .post(`${this.url}/login`)
                .send({ userName, password })
                .then(res => {
                    this.props.getUser(userName)
                    this.props.history.push(`/rooms`)
                })
                .catch(error => console.log(error))
        }
    }

    renderForm = () => {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Username</label>
                <br />
                <input onChange={this.onChange} value={this.state.userName} name="userName"></input>
                <br />
                <br />
                <label>Password</label>
                <br />
                <input
                    onChange={this.onChange}
                    value={this.state.password}
                    name="password"
                    type="password">
                </input>
                <br />
                <br />
                {this.state.option === 'SIGN_IN' &&
                    <React.Fragment>
                        <label>Password confirmation</label>
                        <br />
                        <input
                            onChange={this.onChange}
                            value={this.state.password_confirmation}
                            name="passwordConfirmation"
                            type="password">
                        </input>
                        <br />
                        <br />
                    </React.Fragment>
                }
                <button>Get in</button>
            </form>
        )
    }

    signIn = () => {
        this.setState({
            option: 'SIGN_IN'
        })
    }

    logIn = () => {
        this.setState({
            option: 'LOG_IN'
        })
    }

    render() {
        return (
            <div className="Login">
                <h1>Connect 4</h1>
                {this.renderForm()}
                <button onClick={this.logIn}>Log in</button>
                <button onClick={this.signIn}>Sign in</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps, { getUser })(LoginContainer)