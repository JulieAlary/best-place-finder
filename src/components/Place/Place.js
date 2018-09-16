import React from "react";
import "./Place.css";

class Place extends React.Component {
    render() {
        return (
            <div className="Place">
                <div className="image-container">
                    <img src={this.props.place.imageSrc} alt=""/>
                </div>
                <h2>{this.props.place.name}</h2>

                <div className="Place-information">

                    <div className="Place-address">
                        <p>{this.props.place.address}</p>
                        <p>{this.props.place.city}</p>
                        <p>{`${this.props.place.state} ${
                            this.props.place.zipCode
                            }`}</p>
                    </div>

                    <div className="Place-reviews">
                        <h4>{this.props.place.category.toUpperCase()}</h4>
                        <h4 className="rating">{`${
                            this.props.place.rating
                            }`}  <i className="fa fa-star" aria-hidden="true"></i></h4>
                        <p>{`${this.props.place.reviewCount} reviews`}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Place;
