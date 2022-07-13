function ImagePopup({card, onClose}) {
    return(
        <div className={`popup popup_card ${card !== null ? 'popup_is-opened' : ''}`}>
            <div className="popup__card-container">
              <button 
                className="popup__close-button" 
                type="button"
                onClick={onClose}
                ></button>
              <img 
                className="popup__card-img" 
                src={card !== null ? card.link : ''}  
                alt={card !== null ? card.name : ''} 
                />
              <h2 className="popup__card-title">{card !== null ? card.name : ''}</h2>
            </div>
          </div>
    )
}

export default ImagePopup;