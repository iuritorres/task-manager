import { useEffect, useState } from 'react'
import './style.css'
import { ProfileList } from '../ProfileList'

export function Card() {
  const [users, setUsers] = useState([])

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
    <div className="card">
      <p>Desenvolver o Software - Módulos de Lançamento de Notas</p>

      <div className="card-container">
        <span className="material-symbols-outlined">visibility</span>

        <div className="card-container-timer">
          <span className="material-symbols-outlined ">timer</span>
          <p>27 de Out</p>
        </div>

        <span className="material-symbols-outlined">subject</span>
        <span className="material-symbols-outlined">chat</span>
      </div>

      <div className="card-container-image">
        <ProfileList profiles={users} />
      </div>
    </div>
  )
}
