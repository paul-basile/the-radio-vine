import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import Stations from './pages/Stations'
import ServerStats from './pages/ServerStats'

/* 

  Home page is generic introductory to the website, with options to go to the Stations page or the Server page

  Stations page contains all stations, which are by default sorted by popularity (click count). You can sort in variety of other ways (state, votes)

  Server page shows the server stats, among other general user friendly info about the site (languages supported, countries supported)

*/


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/stations" element={<Stations />}/>
        <Route path="/server" element={<ServerStats />}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
