import React from 'react';
import '../styles/card.css';
import 'tachyons';


const card = ({id, name, email}) => {
    return (
        <div className ='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="user"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default card;