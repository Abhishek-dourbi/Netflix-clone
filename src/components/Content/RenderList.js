import React from 'react';
import './Content.css';

const RenderList = ({src, clas, onOpen, movie}) => {
    return (
        <div className={clas} onClick={() => onOpen(movie)}>
            <img src={src} style={{height: '100%',}} alt='img' />
        </div>
    )
}

export default RenderList;