import { useEffect, useState } from "react";
import { api } from "../utils/api.js";

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState();

    useEffect(() => {
        api.getUserInfo()
            .then((result) => {
                setUserName(result['name']);
                setUserDescription(result['about']);
                setUserAvatar(result['avatar']);
            }
        )
      }, [userName, userDescription, userAvatar]
    );


    return(
        <main className="content">

            <section className="profile">
                <div 
                    className='profile__avatar'
                    style={{ backgroundImage: `url(${userAvatar})` }}
                    onClick={onEditAvatar}
                    ></div>
                <div className="profile__intro">
                    <div className="author">
                        <h1 className="author__name">{userName}</h1>
                        <p className="author__profession">{userDescription}</p>
                    </div>
                    <button 
                        className="profile__edit-button" 
                        type="button" 
                        onClick={onEditProfile}></button>
                </div>
                <button 
                className="profile__add-button" 
                type="button"
                onClick={onAddPlace}
                ></button>   
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
    
}

export default Main;