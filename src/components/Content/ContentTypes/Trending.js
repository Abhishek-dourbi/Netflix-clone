import React, {Component} from 'react';
import Content from '../Content';
import Modal from '../../Modal/Modal.js';
import ModalDetails from '../../Modal/ModalDetails';
import { getTrending } from '../../store/Actions';
import { connect } from 'react-redux';

class Trending extends Component {
    state = {
        isShowing: false,
        movie: {}
    }

    componentDidMount () {
        this.props.getTrending();
    }

    onOpen = (movie) => {
        this.setState({ isShowing: true, movie })
    }

    onClose = () => {
        this.setState({ isShowing: false })
    }

    onClickEvent = () => {
        console.log(this.state.movie)
        const{ isShowing, movie } = this.state;
        return(
                <Modal
                    show={isShowing}
                    close={this.onClose}
                    movie={movie}
                >
                    <ModalDetails movie={movie}/>
                </Modal>
        )
    }

    render() {
        return (
            <div style={{color: '#fff', marginLeft: 40}}>
                <h1 style={{paddingTop: '2rem', marginBottom: -16}}>Trending Now</h1>
                <Content data={this.props.trending} clas="other" onOpen={this.onOpen} />
                {this.onClickEvent()}
            </div>
        )
    }
}

const mapStateToProps = ({trending}) => {
    return {trending};
}

export default connect(mapStateToProps, {getTrending})(Trending);