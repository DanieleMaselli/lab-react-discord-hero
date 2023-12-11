import './App.css'
import icon1 from './assets/discord-logo-white.png'
import menu from './assets/menu-icon.png'
import splash from './assets/discord-background.png'

function App() {
  return(
    <div className='container'>
      <nav className='nav'>
        <img className='logo' src= {icon1} alt="" />
        <img className='menu' src= {menu} alt="" />
      </nav>

      <h1>IMAGINE A<br></br>PLACE...</h1>
      <p>...Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no s</p>
      <button className='button1'>Download for Mac</button>
      <button className='button2'>Open Discord in your browser</button>
      <img className='splash' src= {splash} alt="" />
    </div>
  )
}

export default App
