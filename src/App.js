import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from "./Components/Home";
import {Header} from "./Components/Header";
import {PageNotFound} from "./Components/PageNotFound";
import apiKey from "./config";
import axios from 'axios';
import {PhotoList} from "./Components/PhotoList";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: true
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.handleSearch('cats');
        this.handleSearch('dogs');
        this.handleSearch('rabbits');
    }

    handleSearch( query ){
        let strippedQuery = query.replaceAll(" ","+");
        let searchString = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${strippedQuery}&content_type=1&privacy_filter=1&safe_search=1&is_getty=true&per_page=24&page=1&format=json&nojsoncallback=1`;
        axios.get(searchString)
            .then(response => {
                if (query==='cats'){
                    this.setState({
                        cats: response.data.photos.photo
                    })
                } else if (query==='dogs'){
                    this.setState({
                        dogs: response.data.photos.photo
                    })
                } else if (query==='rabbits'){
                    this.setState({
                        rabbits: response.data.photos.photo
                    })
                }
                this.setState({
                    loading: false
                })
            })
            .catch(error => console.log('Error: ' + error));
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/cats" render={()=><PhotoList photos={this.state.cats} query="cats" loading={this.state.loading}/>}/>
                        <Route exact path="/dogs" render={()=><PhotoList photos={this.state.dogs} query="dogs" loading={this.state.loading}/>}/>
                        <Route exact path="/rabbits" render={()=><PhotoList photos={this.state.rabbits} query="rabbits" loading={this.state.loading}/>}/>
                        {/*<Route path="/:query" component={PhotoList}/>*/}
                        <Route component={PageNotFound}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }

}

export default App;
