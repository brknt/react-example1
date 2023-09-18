import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";

import Home from './pages/Home';
import Detail from './pages/Detail';




function App() {





  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
