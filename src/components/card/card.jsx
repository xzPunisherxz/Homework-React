import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";
import "./card.css";
import { events } from "../../store/index";
import { useParams } from "react-router-dom";


const Card = ({ _id, theme, comment, date, favorite, archive }) => {
  
 
  const formatDate = moment(date).utc().format("YYYY-MM-DDTHH:mm");

  
  const handleToArchive = (evt) => {
    evt.preventDefault();
    events.editEvent({
      id: _id,
      theme,
      comment,
      date,
      favorite,
      archive: !archive,
    })
  }

  const handleToFavorite = (evt) => {
    evt.preventDefault();
    events.editEvent({
      id: _id,
      theme,
      comment,
      date,
      archive,
      favorite: !favorite,
    })
  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    events.deleteEvent(_id)
  }

  return (
    <article className="card">
      <div className="card__form">
        <div className="card__inner">
          <div className="card__control">
            <Link
              to={`/event/${_id}`}
              type="button"
              className="card__btn card__btn--edit"
              
            >
              Редактировать
            </Link>
            <button type="button" className="card__btn card__btn--archive"
             onClick={handleToArchive}>
              В архив
            </button>
            <button type="button" 
            className={`card__btn card__btn--favorites ${favorite && "favorite-on"}`}
            onClick={handleToFavorite}>
              В избранное
            </button>
            <button type="button" className="card__btn card__btn--remove"
            onClick={handleDelete}>
              Удалить
            </button>
          </div>
          <div className="card__textarea-wrap">
            <p className="card__text--theme">{theme}</p>
            <p className="card__text--comment">{comment}</p>
          </div>
          <div className="card__settings">
            <span className="card__date">{formatDate}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
