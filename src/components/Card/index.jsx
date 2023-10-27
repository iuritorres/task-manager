import "./style.css"

export function Card() {
  return (
    <div className="card">
      <p>Desenvolver o Software - Módulos de Lançamento de Notas</p>
      <div className="card-container">
        <span className="material-symbols-outlined">
          visibility
        </span>
        <div className="card-container-timer">
          <span class="material-symbols-outlined ">
            timer
          </span>
          <p>
            27 de Out
          </p>
        </div>
        <span class="material-symbols-outlined">
          subject
        </span>
        <span class="material-symbols-outlined">
          chat
        </span>
      </div>
      <div className="card-container-image">
        <img src="/assets/uber.jpg" alt="uber" />
        <img src="/assets/caique.png" alt="" />
        <img src="/assets/iuri.jpg" alt="" />
        <img src="/assets/witor.png" alt="" />
      </div>
    </div>

  )
}
