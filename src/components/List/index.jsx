import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './style.css'

List.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  transferCard: PropTypes.func,
}

export function List({ name, children, transferCard }) {
  const [lists, setLists] = useState()

  const draggingOver = (e) => {
    e.preventDefault()
    // const draggedCardId = e.dataTransfer.getData('cardId')
    // console.log(e)
  }

  const dragDropped = (e) => {
    const transferedCardId = e.dataTransfer.getData('cardId')

    transferCard({
      cardId: transferedCardId,
      to: name,
    })
  }

  useEffect(() => {
    if (!lists) {
      setLists(document.getElementsByClassName('list-container'))
      return
    }
  }, [lists])

  return (
    <li className="list-container">
      <div className="list-container-header">
        <h2>{name}</h2>
        <span className="material-symbols-outlined">more_horiz</span>
      </div>

      <ol onDragOver={(e) => draggingOver(e)} onDrop={(e) => dragDropped(e)}>
        {children}
      </ol>

      <div>
        <button className="button-secondary">
          <div>
            <span className="material-symbols-outlined">add</span>
            Adicionar um cartão
          </div>
        </button>

        <button
          className="button-secondary"
          title="Criar com base em template..."
        >
          <span className="material-symbols-outlined">file_copy</span>
        </button>
      </div>
    </li>
  )
}
