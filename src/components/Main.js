import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import Card from "../components/Card.js"

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((result) => {
                setUserName(result['name']);
                setUserDescription(result['about']);
                setUserAvatar(result['avatar']);
            }
        )
            .catch(() => {
                console.log('Ошибка')
            }
        )

        .then(() => {
            api.getInitialCards()
                .then((res) => {
                    setCards(res)
                })
        })
            .catch(() => {
                console.log('Ошибка')
            }
        )}, []
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
                        {cards.map((card) => {
                            return (
                                <Card 
                                    card={card} 
                                    key={card._id}
                                    onCardClick={onCardClick}
                                />
                            )
                        })}
                </ul>
            </section>
        </main>
    )
    
}

export default Main;