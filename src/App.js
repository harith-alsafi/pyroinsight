import './App.css'
import { Routes, Route } from "react-router-dom";
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
