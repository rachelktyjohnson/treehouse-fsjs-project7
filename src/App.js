import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from "./Components/Home";
import {Header} from "./Components/Header";
import {PageNotFound} from "./Components/PageNotFound";
import {PhotoList} from "./Components/PhotoList";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/search/:query" component={PhotoList}/>
                        <Route component={PageNotFound}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
