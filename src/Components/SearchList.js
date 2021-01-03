import React from 'react';

export class SearchList extends React.Component {

    render() {

        return (
            <div className="photo-container">
                <h2>Results tagged: "{this.props.match.params.query}"</h2>
                <ul>

                </ul>
            </div>
        )
    }
}