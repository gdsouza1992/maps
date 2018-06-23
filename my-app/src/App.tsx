import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const User = () => <h2>User</h2>;

class App extends React.Component {
  public render() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact={true} from="/" to="/home"/>
                <Route path="/home" component={Home}/>
                {[
                    <Route key={"user"} path="/user" component={User}/>,
                    <Route key={"about"} path="/about" component={About}/>
                ]}
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
