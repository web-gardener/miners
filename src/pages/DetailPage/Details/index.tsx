import React from 'react';

import './style.scss';

const Details = (props: DetailDataProps) => {
    return (
        <div className="details">
            <div className="heading">
                <h1>Details</h1>
            </div>
            <div>
                <hr />
            </div>
            <div className="images">
                <div>
                    <img src={`https://goatminers.com/screenshots/${props.data.name}/desktop-medium.jpg`} alt='desktop-medium' height={265} />
                </div>
                <div>
                    <img src={`https://goatminers.com/screenshots/${props.data.name}/mobile-medium.jpg`} alt='desktop-medium' height={265} />
                </div>
            </div>
            <div className="description">
                <h4>
                    {props.data.description}
                    <br></br>
                    In GoatMiners since {props.data.added} UTC.
                </h4>
            </div>
        </div>
    );
}

export default Details;