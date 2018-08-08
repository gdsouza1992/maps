import * as React from 'react';
import { SignIn } from "../../common/state/account/action";

type SigninState = {
    password: string
    username: string,
}

class Signin extends React.Component<{}, SigninState> {
    public state: SigninState = {
        password: '',
        username: ''
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email/Username:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input name="password" type="text" value={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

    private handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        switch(field) {
            case 'password':
                this.setState({ 'password': value});
                break;
            case 'username':
                this.setState({ 'username': value});
                break;
        }
    }

    private handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        SignIn(username, password)
    }
}

export default Signin;
