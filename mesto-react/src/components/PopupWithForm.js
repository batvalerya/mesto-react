function PopupWithForm(props) {
    return(
        <div className={`popup popup_${props.name} ${props.isOpen}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button"></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
            </div>
      </div>
    )
}

export default PopupWithForm;