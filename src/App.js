import Navbar from "./Pages/Navbar/Navbar";
import Trading from "./Pages/Trading/Trading"
import Dashboard from "./Pages/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <Navbar />
          </div>
          <div class="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
            <Router>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />}>
                  </Route>
                <Route path="/trading" element={<Trading />}>
                </Route>
              </Routes>
            </Router>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
