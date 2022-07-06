import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="root">
      <div className="page">

        <header className="header">
          <img src="<%=require('./images/logo.svg')%>" alt="Логотип" className="header__logo" />
        </header>

        <main className="content">

          <section className="profile">
              <div className="profile__avatar"></div>
              <div className="profile__intro">
                <div className="author">
                  <h1 className="author__name"></h1>
                  <p className="author__profession"></p>
                </div>
                <button className="profile__edit-button" type="button"></button>
              </div>
              <button className="profile__add-button" type="button"></button>   
          </section>

          <section className="photo-gallery">
            <ul className="photo-gallery__items">
              <template className="templateCard">
                <li className="photo-gallery__item">
                  <button className="photo-gallery__delete-button" type="button"></button>
                  <img className="photo-gallery__image" src="#" alt="" />
                  <div className="photo-gallery__caption">
                    <h2 className="photo-gallery__title"></h2>
                    <div className="photo-gallery__counter">
                      <button className="like-button" type="button"></button>
                      <p className="photo-gallery__counter-number"></p>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </section>
        </main>

        <footer className="footer">
          <p className="footer__text">&copy;2022. Mesto Russia</p>
        </footer>

      </div>

          <div className="popup popup_edit-profile">
            <div className="popup__container">
              <button className="popup__close-button" type="button"></button>
              <h2 className="popup__title">Редактировать профиль</h2>
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
            </div>
          </div>

          <div className="popup popup_add-card">
            <div className="popup__container">
              <button className="popup__close-button" type="button"></button>
              <h2 className="popup__title">Новое место</h2>
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
            </div>
          </div>

          <div className="popup popup_card">
            <div className="popup__card-container">
              <button className="popup__close-button" type="button"></button>
              <img className="popup__card-img" src="#"  alt="" />
              <h2 className="popup__card-title"></h2>
            </div>
          </div>

          <div className="popup popup_confirm">
            <div className="popup__confirm-container">
              <button className="popup__close-button" type="button"></button>
              <h2 className="popup__confirm-title">Вы уверены?</h2>
              <form className="popup__form" name="deleteCard" novalidate>
                <button className="popup__submit popup__confirm-button" type="submit">Да</button>
              </form>
            </div>
          </div>
          
          <div className="popup popup_edit-avatar">
            <div className="popup__avatar-container">
              <button className="popup__close-button" type="button"></button>
              <h2 className="popup__title">Обновить аватар</h2>
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
            </div>
          </div>

    </body>
  );
}

export default App;
