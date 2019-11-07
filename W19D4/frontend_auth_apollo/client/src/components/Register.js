import React from 'react';
import { Mutation } from 'react-apollo'
import { REGISTER_USER } from '../graphql/mutations';


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e, registerUser) {
        e.preventDefault();
        registerUser({
            variables: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        })
    }

    updateCache(cache, { data }) {
        cache.writeData({
            data: { isLoggedIn: data.register.loggedIn }
        });
    }

    render() {
        return (
            <Mutation 
                mutation={REGISTER_USER}
                onCompleted={data => {
                    console.log(data)
                    const { token } = data.register;
                    localStorage.setItem("auth-token", token)
                    this.props.history.push('/')
                }}
                update={(cache, data) => this.updateCache(cache, data)}
            >
                {(registerUser) => {
                    return (
                        <form onSubmit={e => this.handleSubmit(e, registerUser)}>
                            <label>Name</label>
                            <input 
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                            />
                            <label>Email</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                            />
                            <label>Password</label>
                            <input
                                type="text"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                            />
                            <input type="submit" value="Sign Up"/>
                        </form>
                    )
                }}
            </Mutation>
        )
    }
}

export default Register;