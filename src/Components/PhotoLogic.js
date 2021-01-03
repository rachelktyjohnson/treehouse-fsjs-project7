import React from 'react';
import apiKey from "../config";
import axios from "axios";
import {PhotoList} from "./PhotoList";

export class PhotoLogic extends React.Component {

    state = {
        query: this.props.match.params.query,
        photos: [],
        loading: true
    }

    componentDidMount() {
        this.handleSearch(this.props.match.params.query);
    }

    componentDidUpdate(prevProps) {
        let oldQuery = prevProps.match.params.query;
        let newQuery = this.props.match.params.query;
        if (oldQuery !== newQuery) {
            this.handleSearch(newQuery);
        }
    }

    handleSearch(query){
        this.setState({
            loading: true
        })
        let strippedQuery = query.replaceAll(" ","+");
        let searchString = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${strippedQuery}&content_type=1&privacy_filter=1&safe_search=1&is_getty=true&per_page=16&page=1&format=json&nojsoncallback=1`;
        axios.get(searchString)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo,
                    loading:false
                })

            })
    }

    render() {
        return (
            <PhotoList
                query={this.state.query}
                photos={this.state.photos}
                loading={this.state.loading}/>
        )
    }

}