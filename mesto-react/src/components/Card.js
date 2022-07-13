function Card(props) {

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