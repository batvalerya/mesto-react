import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <body className="root">
      <div className="page">

        <Header />
        <Main />
        <Footer />

      </div>

      <PopupWithForm title="Редактировать профиль" name="edit-profile" onEditProfile={handleEditProfileClick} isEditProfilePopupOpen={false} children={<form className="popup__form popup__form_type_edit" name="aboutUser" novalidate>
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
              </form>}
      />

      <PopupWithForm title="Новое место" name="add-card" onAddPlace={handleAddPlaceClick} isAddPlacePopupOpen="false" children={<form className="popup__form popup__form_type_add" name="addCard" novalidate>
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
              </form>}
      />

      <PopupWithForm title="Вы уверены?" name="confirm" children={<form className="popup__form" name="deleteCard" novalidate>
                <button className="popup__submit popup__confirm-button" type="submit">Да</button>
              </form>}
      />

      <PopupWithForm title="Обновить аватар" name="edit-avatar" onEditAvatar={handleEditAvatarClick} isEditAvatarPopupOpen="false" children={<form className="popup__form popup__form_type_avatar" name="editAvatar" novalidate>
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
              </form>}
      />

      <ImagePopup />

    </body>
  );

  function handleEditAvatarClick () {
    const editAvatarForm = document.querySelector('.popup_edit-avatar');
    editAvatarForm.classList.add('popup_is-opened');
  }

 function handleEditProfileClick () {
     const editProfileForm = document.querySelector('.popup_edit-profile');
     editProfileForm.classList.add('popup_is-opened');
  }

 function handleAddPlaceClick () {
     const editProfileForm = document.querySelector('.popup_add-card');
     editProfileForm.classList.add('popup_is-opened');
  }
}

export default App;
