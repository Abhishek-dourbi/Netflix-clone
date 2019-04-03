import React from 'react';
import './Modal.css';

const ModalDetails = ({ movie, }) => {
    console.log(movie);
    return (
        <div className="modal-details">
            <div className="modal-header">
                {movie.name || movie.title}
            </div>
            <div className="modal-overview">
                <div style={{color: 'green', fontWeight: 'bold', marginRight: 6}}>Rating {movie.vote_average}/10</div>
                <div>Release Date: {movie.first_air_date || movie.release_date}</div>
            </div>
            <div className="modal-body">
                {movie.overview}
            </div>
            <div className="modal-btn">
                <button className="btn1">
                    <i className="play icon"></i> Play
                </button>
                <button className="btn2">
                    <i className="plus icon"></i> My list
                </button>
            </div>
        </div>
    )
}

export default ModalDetails;