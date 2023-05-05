import './index.css'
import { Header, LeftSideBar, } from './components'
import { HomeScreen } from './screens'

function App() {
  return (
    <>
      <Header />
      <div className="app_container">
        <LeftSideBar />
        <div className="main_container">
          <HomeScreen />
        </div>
      </div>
    </>
  )
}

export default App
