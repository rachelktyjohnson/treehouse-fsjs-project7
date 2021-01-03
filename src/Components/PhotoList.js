import React from 'react';
import {Photo} from "./Photo";

export class PhotoList extends React.Component {

    render() {
        let photosData;
        let query;
        if (this.props.query && this.props.photos){
            query = this.props.query;
            photosData = this.props.photos.map(photo =>
                <Photo
                    key={photo.id}
                    server={photo.server}
                    id={photo.id}
                    secret={photo.secret}
                />
            )
        }

        return (
            <div className="photo-container">
                {this.props.loading
                    ?
                    <h1>Loading...</h1>
                    :
                    <h2>{query}</h2> }
                <ul>
                    {photosData}
                </ul>
            </div>
        )
    }
}