import Projects from "./components/Projects";
import Layout from "./Layout";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
