import { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

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
  }


  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>

      <PopupWithForm 
        title="Редактировать профиль" 
        name="edit-profile"
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen ? 'popup_is-opened' : ''}
        >
              <form className="popup__form popup__form_type_edit" name="aboutUser" novalidate>
                <input 
                  className="popup__input popup__input_type_name" 
                  type="text" 
                  id="name-input"
                  name="name" 
                  placeholder="Имя" 
                  value 
                  required 
                  minlength="2" 
                  maxlength="40" 
                />
                <span id="name-input-error" className="popup__input-error"></span>
                <input 
                  className="popup__input popup__input_type_description" 
                  type="text" 
                  name="description" 
                  placeholder="О себе" 
                  value 
                  required 
                  minlength="2" 
                  maxlength="200" 
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
              <form className="popup__form popup__form_type_add" name="addCard" novalidate>
                <input 
                  className="popup__input popup__input_type_new-name" 
                  type="text" 
                  name="name" 
                  id="new-name-input"
                  placeholder="Название" 
                  value 
                  required 
                  minlength="2" 
                  maxlength="30" />
                <span id="new-name-input-error" className="popup__input-error"></span>
                <input 
                  className="popup__input  popup__input_type_link" 
                  type="url" 
                  name="link" 
                  id="link-input"
                  placeholder="Ссылка на картинку" 
                  value 
                  required 
                  />
                <span id="link-input-error" className="popup__input-error"></span>
                <button className="popup__submit popup__create-button" type="submit">Создать</button>
              </form>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="confirm">
              <form className="popup__form" name="deleteCard" novalidate>
                <button className="popup__submit popup__confirm-button" type="submit">Да</button>
              </form>
      </PopupWithForm>

      <PopupWithForm 
      title="Обновить аватар" 
      name="edit-avatar"
      onClose={closeAllPopups}
      isOpen={isEditAvatarPopupOpen ? 'popup_is-opened' : ''}
      >
              <form className="popup__form popup__form_type_avatar" name="editAvatar" novalidate>
                <input 
                  className="popup__input  popup__input_type_link" 
                  type="url" 
                  name="link" 
                  id="url-input"
                  placeholder="Ссылка на картинку" 
                  value 
                  required />
                <span id="url-input-error" className="popup__input-error"></span>
                <button className="popup__submit popup__create-button" type="submit">Сохранить</button>
              </form>
      </PopupWithForm>

      <ImagePopup/>

    </>
  );
}

export default App;