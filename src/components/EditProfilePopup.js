import PopupWithForm from './PopupWithForm.js'

export default function EditProfilePopup(props) {

    return (
            <PopupWithForm 
                title="Редактировать профиль" 
                name="edit-profile"
                isOpen={props.isOpen ? 'popup_is-opened' : ''}
                onClose={props.onClose}
                onOverlayClick={props.onOverlayClick}
                popupContainerClass={'popup__container'}
                buttonText="Сохранить">
              <input 
                  className="popup__input popup__input_type_name" 
                  type="text" 
                  id="name-input"
                  name="name" 
                  placeholder="Имя" 
                  defaultValue
                  required 
                  minLength="2" 
                  maxLength="40" 
              />
              <span id="name-input-error" className="popup__input-error"></span>
              <input 
                  className="popup__input popup__input_type_description" 
                  type="text" 
                  name="description" 
                  placeholder="О себе" 
                  defaultValue 
                  required 
                  minLength="2" 
                  maxLength="200" 
                  id="description-input"
              />
              <span id="description-input-error" className="popup__input-error"></span>
            </PopupWithForm>
    )
}

    