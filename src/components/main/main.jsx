import React from 'react';
import FlipCard from '../flipCard/flipCard';
import './main.css';
import data from '../data/data.json'

const Main = () => {
    return(
        <div className='main d-flex gap-3 justify-content-around flex-wrap'>
            {
                data.map(
                    (item) => (
                        <FlipCard
                            key={item.title}
                            title={item.title}
                            url={item.url}
                            desc={item.desc}
                        />
                    )
                )
            }


        </div>
    );
};
export default Main;