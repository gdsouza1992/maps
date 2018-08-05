import * as React from 'react';
import { SignUp } from "../../common/state/user/action";

type SignupState = {
    email: string,
    password: string
    username: string,
}

class Signup extends React.Component<{}, SignupState> {
    public state: SignupState = {
        email: '',
        password: '',
        username: ''
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                    Username:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

    private handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        switch(field) {
            case 'email':
                this.setState({ 'email': value});
                break;
            case 'username':
                this.setState({ 'username': value});
                break;
            case 'password':
                this.setState({ 'password': value});
                break;
        }
    }

    private handleSubmit = (event) => {
        const { email, username, password } = this.state;
        SignUp(email, username, password)
        event.preventDefault();
    }
}

export default Signup;
