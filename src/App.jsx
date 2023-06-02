import { Routes, Route } from "react-router-dom";
import Home from './views/home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
      </Routes>

    </>
  )
}

export default App;
