import React from 'react';

export const Photo = (props) => {
    return (
        <li>
            <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt=""/>
        </li>
    )
}