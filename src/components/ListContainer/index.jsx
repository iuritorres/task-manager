import { useEffect, useState } from 'react'
import { Card } from '../Card'
import { List } from '../List'
import './style.css'

export function ListContainer() {
  const [lists, setLists] = useState()

  const transferCard = ({ cardId, to }) => {
    const fromList = lists.find((list) =>
      list.cards.find((card) => card.id === cardId)
    )
    if (fromList.name === to) return

    const toList = lists.find((list) => list.name === to)
    const card = fromList.cards.find((card) => card.id === cardId)

    // update lists
    toList.cards.unshift({
      id: cardId,
      name: card.name,
      usersAttached: card.usersAttached,
    })

    const fromListIndex = lists.findIndex((list) => list.name === fromList.name)
    const newFromCards = fromList.cards.filter((card) => card.id !== cardId)

    const updatedLists = [...lists]
    updatedLists[fromListIndex].cards = newFromCards

    setLists(updatedLists)
  }

  useEffect(() => {
    const listCollection = [
      {
        name: 'Backlog',
        cards: [
          {
            id: 'card-1',
            name: 'Desenvolver o Software - Módulos de Lançamento de Notas',
            isVisible: true,
            usersAttached: [
              {
                name: 'Iuri Torres',
                img: '/assets/iuri.jpg',
              },
              {
                name: 'Caique Porto',
                img: '/assets/caique.png',
              },
            ],
          },
          {
            id: 'card-2',
            name: 'Criar protótipo do módulo - Lançamento de Notas',
            isVisible: false,
            usersAttached: [
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
            ],
          },
          {
            id: 'card-3',
            name: 'Desenvolver a plataforma base FrontEnd + BackEnd',
            isVisible: true,
            usersAttached: [
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
            ],
          },
        ],
      },
      {
        name: 'A fazer',
        cards: [
          {
            id: 'card-4',
            name: 'Desenvolver o Software - Módulos de Lançamento de Notas',
            isVisible: true,
            usersAttached: [
              {
                name: 'Iuri Torres',
                img: '/assets/iuri.jpg',
              },
              {
                name: 'Caique Porto',
                img: '/assets/caique.png',
              },
            ],
          },
          {
            id: 'card-5',
            name: 'Desenvolver a plataforma base FrontEnd + BackEnd',
            isVisible: false,
            usersAttached: [
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
            ],
          },
        ],
      },
      {
        name: 'Em andamento',
        cards: [
          {
            id: 'card-6',
            name: 'Desenvolver o Software - Módulos de Lançamento de Notas',
            isVisible: true,
            usersAttached: [
              {
                name: 'Iuri Torres',
                img: '/assets/iuri.jpg',
              },
              {
                name: 'Caique Porto',
                img: '/assets/caique.png',
              },
            ],
          },
        ],
      },
      {
        name: 'Revisão',
        cards: [],
      },
      {
        name: 'Concluído 🎉',
        cards: [],
      },
    ]

    if (!lists) {
      setLists(listCollection)
      return
    }
  }, [lists])

  return (
    <main id="listcontainer-main">
      <ol>
        {lists &&
          lists.map((list) => (
            <List
              key={`list-${list.name}`}
              name={list.name}
              transferCard={transferCard}
            >
              {list.cards.map((card) => (
                <Card
                  key={`card-${card.id}`}
                  id={card.id}
                  name={card.name}
                  usersAttached={card.usersAttached}
                  visible={card.isVisible}
                />
              ))}
            </List>
          ))}
      </ol>
    </main>
  )
}
