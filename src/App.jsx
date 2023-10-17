import './App.css'
import Box from './Component/Boxes/Box'
import Chart from '../src/Component/Chart/Chart'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Sidebar from './Component/SidebarContainer/Sidebar'


function App() {
  

  return (
    <div className="body-container">
       <div>
        <Sidebar/>
       </div>
       <div className='right-element'>
         <Header/>
         <Box/>
         <Chart/>
         <Footer/>
       </div>
    </div>
  )
}

export default App
