function Main(props) {
    return(
        <main className="content">

            <section className="profile">
                <div className="profile__avatar" onClick={props.onEditAvatar}></div>
                <div className="profile__intro">
                    <div className="author">
                        <h1 className="author__name">Жак-Ив Кусто</h1>
                        <p className="author__profession">Исследователь океана</p>
                    </div>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile} ></button>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>   
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
    )

    // function handleEditAvatarClick () {
    //    const editAvatarForm = document.querySelector('.popup_edit-avatar');
    //    editAvatarForm.classList.add('popup_is-opened');
    // }

    // function handleEditProfileClick () {
    //     const editProfileForm = document.querySelector('.popup_edit-profile');
    //     editProfileForm.classList.add('popup_is-opened');
    // }

    // function handleAddPlaceClick () {
    //     const editProfileForm = document.querySelector('.popup_add-card');
    //     editProfileForm.classList.add('popup_is-opened');
    // }
    
}

export default Main;