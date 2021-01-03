import React from 'react';
import {Photo} from "./Photo";

export class PhotoList extends React.Component {



    render() {

        let photosData = this.props.photos.map(photo =>
            <Photo
                key={photo.id}
                server={photo.server}
                id={photo.id}
                secret={photo.secret}
            />
        )
        return (
            <div className="photo-container">
                <h2>Results tagged: {this.props.query}</h2>
                <ul>
                    {photosData}
                </ul>
            </div>
        )
    }
}