import React from 'react';

const GiphysIndexItem = ({ giphy }) => {
    return (
        <li>
            <img src={giphy.images.fixed_height.url}></img>
        </li>
    );

}

export default GiphysIndexItem;