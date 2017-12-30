import React from 'react';

const ImageScore = (props) => {
    const { ups, downs } = props;
    const upsPercent = `${100 * (ups / (ups + downs))}%`;
    const downsPercent = `${100 * (downs / (downs + ups))}%`;

    return (
        <div>
            Ups/Downs
            <div className="progress">
                <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped" />
                <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped" />
            </div>
        </div>
    );
};

export default ImageScore;