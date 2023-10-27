import { useState } from "react"
import "./style.css"
import PropTypes from "prop-types"
import { useEffect } from "react"

List.propTypes = {
  children: PropTypes.node,
}

export function List({ children }) {
  const [lists, setLists] = useState()

  function showScrollbar(element) {
    element.style.overflow = "auto"
    element.style.paddingRight = "6px"
  }

  function hideScrollbar(element) {
    element.style.overflow = "hidden"
    element.style.paddingRight = "10px"
  }

  useEffect(() => {
    if (!lists) {
      setLists(document.getElementsByClassName("list-container"))
      return
    }

    Array.from(lists).forEach((list) => hideScrollbar(list))

    Array.from(lists).forEach((list) => {
      list.addEventListener("mouseover", () => showScrollbar(list))
      list.addEventListener("mouseout", () => hideScrollbar(list))
    })

    // Reset events
    return () => {
      Array.from(lists).forEach((list) => {
        list.removeEventListener("mouseover", () => showScrollbar(list))
        list.removeEventListener("mouseout", () => hideScrollbar(list))
      })
    }
  }, [lists])

  return (
    <li className="list-container">
      <h2>Backlog</h2>

      <ol>{children}</ol>
    </li>
  )
}
