import React from "react";
import { observer } from "mobx-react-lite";
import { events } from "../../store/index";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Event = observer(({ _id, theme, comment, date, favorite, archive }) => {  
  
  const pageHistory = useHistory();
  const { id } = useParams();  
  let formHeading;
  let buttonText;
  if(id) {
    formHeading = "Редактирование события";
    buttonText = "Сохранить";
  } else {
    formHeading = "Добавление события";
    buttonText = "Добавить";
  }
  
  const [form, setForm] = React.useState({
    theme: theme,
    comment: comment,
    date: new Date(),
    favorite: false,
    archive: false
  });
  
  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setForm({ ...form, [name]: value})
    
  }
  

  const handleSubmit = (evt) => {
    
    evt.preventDefault();
    if(id) {
      events.editEvent({
        id: _id,
        theme: form.theme,
        comment: form.comment,
        date: form.date,
        favorite,
        archive 
      })
    } else {
      events.addEvent(form)
    }
    pageHistory.goBack();
  } 

  const formatDate = moment(date).utc().format("YYYY-MM-DDTHH:mm");


  
  return (
    <section className="board">
      <form onSubmit={handleSubmit} className="board__form">
        <h2 className="board__title">{formHeading}</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">
            Тема:
          </label>
          <textarea
            type="text"
            onChange={handleFieldChange}
            className="board__input board__input--theme"
            name="theme"
            required
            defaultValue={theme}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label
            htmlFor="comment"
            className="board__label board__label--comment"
          >
            Комментарий:
          </label>
          <textarea
            type="text"
            onChange={handleFieldChange}
            className="board__input board__input--comment"
            name="comment"
            required
            defaultValue={comment}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">
            Дата:
          </label>
          <input
            type="datetime-local"
            onChange={handleFieldChange}
            className="board__input board__input--date"
            name="date"
            defaultValue={formatDate}
          />
        </fieldset>
        <div className="btns">
          <button  type="submit" className="btn-submit">
            {buttonText}
          </button>
          <button type="reset" className="btn-reset" >
            Очистить
          </button>
        </div>
      </form>
    </section>
  );
})

export default Event;
