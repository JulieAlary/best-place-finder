import React from 'react';
import './App.css';

import PlaceList from './components/PlaceList/PlaceList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/YelpClient.js'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            places: []
        };
        this.searchYelp = this.searchYelp.bind(this);
    }
    searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy).then(places => {
            this.setState({places: places});
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Your Best Places Finder</h1>
                <SearchBar searchYelp={this.searchYelp} />
                <PlaceList places={this.state.places} />
            </div>
        );
    }
}

export default App;

