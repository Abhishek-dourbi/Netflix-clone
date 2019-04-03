import React, {Component} from 'react';
import video from '../../apis/video';
import Navbar from './Navbar';
import './Header.css';

class Header extends Component {
    state = {
        res: {}
    }
    componentDidMount () {
        this.onSubmit();
    }
    onSubmit = async () => {
        const response = await video('/tv/1396', {
          params: {
            
          }
        })
        
        this.setState({ res: response.data  })
    }

    render() {
        const {name, backdrop_path, overview} = this.state.res;
        const url = 'https://image.tmdb.org/t/p/original' + backdrop_path;
        return (
            <div className="main" style={{backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                <Navbar />
                <div className="txt">
                    <h1 className="heading">{name}</h1>
                    <button className="btn">
                        <i className="play icon"></i> Play
                    </button>
                    <button className="btn">
                        <i className="plus icon"></i> My list
                    </button>
                    <p className="desc">
                        {overview}
                    </p>
                </div>
                <div className="extra">
            
                </div>
            </div>
        )
    }
}

export default Header;