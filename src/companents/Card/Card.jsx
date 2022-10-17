import React from 'react';
import './Card.scss';
import More from './More/More';

const Card = ({data}) => {
    
    return (
        <>
          {
            data.new.map((el, index)=>{
              return  <div
                        onClick={""}
                        className='card'
                      >
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                      </div>
            })
          }
        </>
        
    );
}

export default Card;
