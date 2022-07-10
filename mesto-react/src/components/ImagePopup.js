function ImagePopup() {
    return(
        <div className="popup popup_card">
            <div className="popup__card-container">
              <button className="popup__close-button" type="button"></button>
              <img className="popup__card-img" src="#"  alt="" />
              <h2 className="popup__card-title"></h2>
            </div>
          </div>
    )
}

export default ImagePopup;