import './styles.css'
import sixdots from "../../assets/6dots.svg"

export default function Header() {
  return (
    <header>
      <div className='container-header'>
        <h2>Classic Cheesecake Recipe</h2>
        <div className='container-header-subtext'>
          <img src={sixdots} alt="sixdots" />
        <p>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired<br></br> with a buttery graham cracker crust, no one can deny its simple decadence. For <br></br>the best results, bake in a water bath.</p>
        </div>
      </div>      
    </header>
  )
}

