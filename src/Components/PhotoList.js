import React from 'react';
import {Photo} from "./Photo";
import {PhotosNotFound} from "./PhotosNotFound";

export class PhotoList extends React.Component {
    render () {
        let photoData;
        if (this.props.photos.length > 0) {
            photoData = this.props.photos.map(photo =>
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
                {this.props.loading ? <h1>Loading...</h1> : <h2>Photos tagged: "{this.props.query}"</h2>}

                {this.props.loading ? '' : <ul>{photoData}</ul>}
            </div>
        )
    }
}