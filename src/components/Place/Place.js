import React from "react";
import "./Place.css";

class Place extends React.Component {
    render() {
        return (
            <div className="Place">
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <h2>{this.props.place.name}</h2>
                            <h6 className="text-right"><span
                                className="badge badge-secondary">{this.props.place.category}</span></h6>
                        </div>

                        <div className="card-body">
                            <img src={this.props.place.imageSrc} alt="" className="img-thumbnail"/>

                            <div className="Place-information">
                                <div className="Place-address">
                                    <address>
                                        <strong>{this.props.place.name}</strong><br/>
                                        {this.props.place.address}<br/>
                                        {this.props.place.city}, ({this.props.place.state}) {
                                        this.props.place.zipCode}<br/>
                                        <i className="fa fa-phone" aria-hidden="true"></i> {this.props.place.displayPhone}
                                    </address>
                                </div>
                                <div className="Place-reviews">
                                    <h4 className="rating">{`${this.props.place.rating}`}
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </h4>
                                    <p>{`${this.props.place.reviewCount} reviews`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Place;
