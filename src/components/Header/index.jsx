import { useEffect, useState } from 'react'
import { ProfileList } from '../ProfileList'
import './style.css'

export function Header() {
  const [users, setUsers] = useState([])
  const [isFavorite, setIsFavorite] = useState(true)

  useEffect(() => {
    const usersList = [
      {
        name: 'Iuri Torres',
        img: '/assets/iuri.jpg',
      },
      {
        name: 'Caique Porto',
        img: '/assets/caique.png',
      },
      {
        name: 'João Witor',
        img: '/assets/witor.png',
      },
      {
        name: 'Cauan Veigar',
        img: '/assets/uber.jpg',
      },
      {
        name: 'Iuri Torres2',
        img: '/assets/iuri.jpg',
      },
      {
        name: 'Caique Porto3',
        img: '/assets/caique.png',
      },
      {
        name: 'João Witor4',
        img: '/assets/witor.png',
      },
      {
        name: 'Cauan Veigar',
        img: '/assets/uber.jpg',
      },
    ]

    setUsers(usersList)
  }, [])

  return (
    <header id="header-board" className="glass-effect">
      <div className="header-board-data">
        <img src="/bytecode-logo.svg" alt="logo" className="profile" />
        <h1>Prototyping & Development</h1>
        <span
          className={`material-symbols-outlined ${isFavorite && 'filled_star'}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          star
        </span>
        <span className="material-symbols-outlined">people</span>
      </div>

      <div className="header-board-options">
        <span className="material-symbols-outlined">flash_on</span>
        <span className="material-symbols-outlined">notifications</span>
        <span className="material-symbols-outlined">info</span>

        <button className="button-secondary">
          <span className="material-symbols-outlined">filter_list</span>
          Filtros
        </button>

        <span>|</span>

        <ProfileList profiles={users} />

        <button className="button-primary">
          <span className="material-symbols-outlined">person_add</span>
          Compartilhar
        </button>
        <span className="material-symbols-outlined">more_horiz</span>
      </div>
    </header>
  )
}
