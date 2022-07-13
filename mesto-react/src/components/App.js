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
        >
              <form className="popup__form popup__form_type_edit" name="aboutUser" noValidate>
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
                <button className="popup__submit popup__save-button" type="submit">Сохранить</button>
              </form>
      </PopupWithForm>


      <PopupWithForm 
        title="Новое место" 
        name="add-card"
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen ? 'popup_is-opened' : ''}
        >
              <form className="popup__form popup__form_type_add" name="addCard" noValidate>
                <input 
                  className="popup__input popup__input_type_new-name" 
                  type="text" 
                  name="name" 
                  id="new-name-input"
                  placeholder="Название" 
                  defaultValue 
                  required 
                  minLength="2" 
                  maxLength="30" />
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
                <button className="popup__submit popup__create-button" type="submit">Создать</button>
              </form>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="confirm">
              <form className="popup__form" name="deleteCard" noValidate>
                <button className="popup__submit popup__confirm-button" type="submit">Да</button>
              </form>
      </PopupWithForm>

      <PopupWithForm 
      title="Обновить аватар" 
      name="edit-avatar"
      onClose={closeAllPopups}
      isOpen={isEditAvatarPopupOpen ? 'popup_is-opened' : ''}
      >
              <form className="popup__form popup__form_type_avatar" name="editAvatar" noValidate>
                <input 
                  className="popup__input  popup__input_type_link" 
                  type="url" 
                  name="link" 
                  id="url-input"
                  placeholder="Ссылка на картинку" 
                  defaultValue 
                  required />
                <span id="url-input-error" className="popup__input-error"></span>
                <button className="popup__submit popup__create-button" type="submit">Сохранить</button>
              </form>
      </PopupWithForm>

      <ImagePopup 
        onClose={closeAllPopups}
        card={selectedCard}
      />

    </>
  );
}

export default App;