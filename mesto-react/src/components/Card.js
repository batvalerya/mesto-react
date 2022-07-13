function Card({card}) {

    return(
        <li className="photo-gallery__item">
            <button className="photo-gallery__delete-button" type="button"></button>
            <img className="photo-gallery__image" src={card.link} alt={card.name}/>
            <div className="photo-gallery__caption">
                <h2 className="photo-gallery__title">{card.name}</h2>
                <div className="photo-gallery__counter">
                    <button className="like-button" type="button"></button>
                    <p className="photo-gallery__counter-number"></p>
                </div>
            </div>
        </li>
    )
}

export default Card;