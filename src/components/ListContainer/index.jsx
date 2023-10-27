import { Card } from "../Card"
import { List } from "../List"
import "./style.css"

export function ListContainer() {
  return (
    <main id="listcontainer-main">
      <ol>
        <List>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </List>
        <List>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </List>
      </ol>
    </main>
  )
}
