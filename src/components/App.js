import { useState } from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [selectedCard, setSelectedCard] = useState(null);
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups()
    }
  }


  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm 
        title="Редактировать профиль" 
        name="edit-profile"
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen ? 'popup_is-opened' : ''}
        popupContainerClass={'popup__container'}
        buttonText="Сохранить"
        onOverlayClick={handleOverlayClick}
        >
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


      <PopupWithForm 
        title="Новое место" 
        name="add-card"
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen ? 'popup_is-opened' : ''}
        popupContainerClass={'popup__container'}
        buttonText="Создать"
        onOverlayClick={handleOverlayClick}
        >
              <input 
                className="popup__input popup__input_type_new-name" 
                type="text" 
                name="name" 
                id="new-name-input"
                placeholder="Название" 
                defaultValue 
                required 
                minLength="2" 
                maxLength="30" 
              />
              <span id="new-name-input-error" className="popup__input-error"></span>
              <input 
                className="popup__input  popup__input_type_link" 
                type="url" 
                name="link" 
                id="link-input"
                placeholder="Ссылка на картинку" 
                defaultValue 
                required 
              />
              <span id="link-input-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm 
        title="Вы уверены?" 
        name="confirm"
        popupContainerClass={'popup__confirm-container'}
        buttonText="Да"
        onOverlayClick={handleOverlayClick}
        >
      </PopupWithForm>

      <PopupWithForm 
      title="Обновить аватар" 
      name="edit-avatar"
      onClose={closeAllPopups}
      isOpen={isEditAvatarPopupOpen ? 'popup_is-opened' : ''}
      popupContainerClass={'popup__avatar-container'}
      buttonText="Сохранить"
      onOverlayClick={handleOverlayClick}
      >
              <input 
                className="popup__input  popup__input_type_link" 
                type="url" 
                name="link" 
                id="url-input"
                placeholder="Ссылка на картинку" 
                defaultValue 
                required 
              />
              <span id="url-input-error" className="popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup 
        onClose={closeAllPopups}
        card={selectedCard}
        onOverlayClick={handleOverlayClick}
      />

    </>
  );
}

export default App;