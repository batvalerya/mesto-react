import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {

  const [currentUser, updateCurrentUser] = useState([]);
  useEffect(() => {
    api.getUserInfo()
        .then((result) => {
            updateCurrentUser(result)
        }
    )
        .catch(() => {
            console.log('Ошибка')
        }
    )}, []
  );

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

  function handleUpdateUser({name, about}) {
    api.updateUserInfo({name, about})
      .then((userInfo) => {
        updateCurrentUser(userInfo)
      })
      .then(() => {
        closeAllPopups()
      })
      .catch(() => {
        console.log('Ошибка')
    }) 
  }

  function handleUpdateAvatar({avatar}) {
    api.editProfileAvatar({avatar})
      .then((userInfo) => {
        updateCurrentUser(userInfo)
      })
      .then(() => {
        closeAllPopups()
      })
      .catch(() => {
        console.log('Ошибка')
      })
  }


  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
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

      <EditProfilePopup 
        onClose={closeAllPopups} 
        isOpen={isEditProfilePopupOpen} 
        onOverlayClick={handleOverlayClick}
        onUpdateUser={handleUpdateUser}
      /> 

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

      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        onOverlayClick={handleOverlayClick}
        onUpdateAvatar={handleUpdateAvatar}
      /> 

      {/* <PopupWithForm 
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
      </PopupWithForm> */}

      <ImagePopup 
        onClose={closeAllPopups}
        card={selectedCard}
        onOverlayClick={handleOverlayClick}
      />
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;