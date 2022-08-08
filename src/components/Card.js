import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


function Card(props) {
    const user = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === user._id;
    const cardDeleteButtonClassName = (
        `photo-gallery__delete-button ${isOwn ? 'photo-gallery__delete-button' : 'photo-gallery__delete-button_hidden'}`
    );

    const isLiked = props.card.likes.some(i => i._id === user._id);
    const cardLikeButtonClassName = (
        `like-button ${isLiked ? 'like-button_active' : 'like-button'}`
    );
    
    function handleClick() {
        props.onCardClick(props.card);
    }

    return(
        <li className="photo-gallery__item">
            <button className="photo-gallery__delete-button" type="button"></button>
            <img className="photo-gallery__image" src={props.card.link} alt={props.card.name}
                onClick={handleClick}
            />
            <div className="photo-gallery__caption">
                <h2 className="photo-gallery__title">{props.card.name}</h2>
                <div className="photo-gallery__counter">
                    <button className="like-button" type="button"></button>
                    <p className="photo-gallery__counter-number">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;