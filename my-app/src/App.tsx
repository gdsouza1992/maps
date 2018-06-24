import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';

import './App.css';
import Home from "./components/home/Home";

const Article = ( routeProps ) => {
    const { match } = routeProps;
    return (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    );
}

const Error = () => (
    <div>
        <h3>404 - Page not found</h3>
    </div>
);

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <>
                    <Header/>
                    <Switch>
                        <Redirect exact={true} from="/" to="/home"/>
                        <Route path="/home" component={Home}/>
                        <Route path="/article/:id" component={Article}/>
                        <Route component={Error}/>
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;
