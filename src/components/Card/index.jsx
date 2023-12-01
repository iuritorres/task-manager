import PropTypes from 'prop-types'
import { ProfileList } from '../ProfileList'
import './style.css'
import { useState } from 'react'

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  usersAttached: PropTypes.array,
  visible: PropTypes.bool,
}

export function Card({ id, name, usersAttached, visible }) {
  const [isVisible, setIsVisible] = useState(visible)

  const dragStarted = (e, cardId) => {
    e.dataTransfer.setData('cardId', cardId)
  }

  const changeCursor = (e) => {
    e.preventDefault()
    // e.target.classList.add('grabbing')
  }

  return (
    <div
      id={id}
      className="card"
      draggable
      onDrag={(e) => changeCursor(e)}
      onDragStart={(e) => dragStarted(e, id)}
    >
      <p>{name}</p>

      <div className="card-container">
        <span
          className="material-symbols-outlined"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? 'visibility' : 'visibility_off'}
        </span>

        <div className="card-container-timer">
          <span className="material-symbols-outlined ">timer</span>
          <p>27 de Out</p>
        </div>

        <span className="material-symbols-outlined">subject</span>
        <span className="material-symbols-outlined">chat</span>
      </div>

      <div className="card-container-image">
        <ProfileList profiles={usersAttached} />
      </div>
    </div>
  )
}
