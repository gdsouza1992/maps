import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Articles from "./components/articles";
import Header from './components/common/header/index';
import Notification from "./components/common/Notification";
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";

// const Article = ( routeProps ) => {
//     const { match } = routeProps;
//     return (
//         <div>
//             <h3>ID: {match.params.id}</h3>
//         </div>
//     );
// }
//
// const LayoutWrapper = (props) => {
//     return (
//         <div className="layout-wrapper">
//             before
//             {props.children}
//             after
//         </div>
//     );
// }

const Error = () => (
    <div>
        <h3>404 - Page not found</h3>
        <Notification message={"Hello devs... you are doing a fine job!"}/>
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
                        <Route path="/signin" component={Signin}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/articles" component={Articles}/>


                        <Route component={Error}/>
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;
