import { List } from "../List"
import "./style.css"

export function ListContainer() {
  return (
    <main id="listcontainer-main">
      <ol>
        <List />
        <List />
        <List />
      </ol>
    </main>
  )
}
