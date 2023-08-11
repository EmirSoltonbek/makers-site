import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <div className='feedback-card'>
        <h3>Обратная связь</h3>
        <h6>Для подробной информации заполните анкету</h6>
        <form>
        <label htmlFor="">Имя</label>
        <input type="text" placeholder='Имя' />
        <label htmlFor="">Фамилия</label>
        <input type="text" placeholder='Фамилия' />
        <label htmlFor="">Номер телефона</label>
        <input type="number" placeholder='Номер телефона' />
        <button>Отправить</button>
        </form>
    </div>
  )
}

export default Feedback