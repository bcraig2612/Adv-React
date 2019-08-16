import React from 'react';

function PhotoDisplayRender(props) {
    const displayData = props.data.map((photo, i) => {
        return (
            <div
                key={i}
                className="display-container"
            >
                <img
                    src={photo.download_url}
                    alt="picsum"
                />
                <h1>{photo.author}</h1>
            </div>
        )
    })
    console.log('Props within product display Render Props', props);

    return (
        <div>
            <h1><u>Photos w/ Render Props</u></h1>
            {displayData}
        </div>
    )
}

export default PhotoDisplayRender;