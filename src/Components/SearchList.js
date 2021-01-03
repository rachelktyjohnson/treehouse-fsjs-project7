import React from 'react';
import apiKey from "../config";
import axios from "axios";
import {Photo} from "./Photo";
import {PhotosNotFound} from "./PhotosNotFound";

export class SearchList extends React.Component {

    state = {
        query: this.props.match.params.query,
        photos: [],
        loading: true
    }

    componentDidMount() {
        this.handleSearch(this.props.match.params.query);

    }

    handleSearch(query){
        let strippedQuery = query.replaceAll(" ","+");
        let searchString = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${strippedQuery}&content_type=1&privacy_filter=1&safe_search=1&is_getty=true&per_page=4&page=1&format=json&nojsoncallback=1`;
        axios.get(searchString)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo,
                    loading:false
                })

            })
    }

    render() {
        let photoData = null;
        if (this.state.photos.length > 0) {
            photoData = this.state.photos.map(photo =>
                <Photo
                    key={photo.id}
                    server={photo.server}
                    id={photo.id}
                    secret={photo.secret}
                />
            )
        } else {
            photoData = <PhotosNotFound/>
        }
        return (
            <div className="photo-container">
                <h2>Results tagged: "{this.props.match.params.query}"</h2>

                {this.state.loading ? <h1>Loading...</h1> : <ul>{photoData}</ul> }
            </div>
        )
    }
}