import React from "react";
import "./PlaceList.css";

import Place from "../Place/Place";

class PlaceList extends React.Component {
    render() {
        return (
            <div className="PlaceList">
                {/* The next two lines take the data returned from yelp and map it onto the shown parameters in the Business Component */}
                {this.props.places.map(place => {
                    return <Place place={place} key={place.id} />;
                })}
            </div>
        );
    }
}

export default PlaceList;
