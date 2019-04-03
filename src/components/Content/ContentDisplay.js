import React, {Component} from 'react';
import Originals from './ContentTypes/Originals'
import Trending from './ContentTypes/Trending';
import TopRated from './ContentTypes/TopRated';
import './Content.css';

class ContentDisplay extends Component {
    state = {
        originals: [],
        action: [],
        trending: [],
        topRated: [],
        comedy: [],
        horror: [],
        romantic: [],
        isShowing: false,
        movie: {}
    }

    render() {
        return (
            <div className="display" >
                <Originals />
                <Trending />
                <TopRated />
            </div>
        )
    }
}

export default ContentDisplay;