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
            photos: [],
            cats: [],
            dogs: [],
            fish: [],
            loading: true
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.handleSearch('cats');
        this.handleSearch('dogs');
        this.handleSearch('fish');
    }

    handleSearch( query ){
        let strippedQuery = query.replaceAll(" ","+");
        let searchString = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${strippedQuery}&privacy_filter=1&safe_search=1&is_getty=true&per_page=3&page=1&format=json&nojsoncallback=1`;
        axios.get(searchString)
            .then(response => {
                if (query==='cats'){
                    this.setState({
                        cats: response.data.photos.photo,
                        loading: false
                    })
                } else if (query==='dogs'){
                    this.setState({
                        dogs: response.data.photos.photo,
                        loading: false
                    })
                } else if (query==='fish'){
                    this.setState({
                        fish: response.data.photos.photo,
                        loading: false
                    })
                } else {
                    this.setState({
                        photos: response.data.photos.photo,
                        loading: false
                    })
                }

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
                        <Route path="/cats" render={()=><PhotoList photos={this.state.cats} query="cats"/>}/>
                        <Route path="/dogs" render={()=><PhotoList photos={this.state.dogs} query="dogs"/>}/>
                        <Route path="/fish" render={()=><PhotoList photos={this.state.fish} query="fish"/>}/>
                        <Route component={PageNotFound}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }

}

export default App;
