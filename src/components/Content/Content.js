import React from 'react';
import RenderList from './RenderList';
import './Content.css'

const Content = ({data,clas, onOpen}) => {
    const renderedList = data.map((dat) => {
        const path = clas === "card" ? dat.poster_path : dat.backdrop_path;
        const url = 'https://image.tmdb.org/t/p/original/' + path;
        return (
            <RenderList 
                key={dat.id}
                movie={dat}
                src={url}
                onOpen={onOpen}
                clas={clas}
            />
        )
    })

    return (
        <div className="rest" style={{display: 'flex' , overflowX: 'visible', overflowY: 'scroll',}}>
            {renderedList}
        </div>
    )
}

export default Content;