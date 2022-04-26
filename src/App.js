import Navbar from "./Pages/Navbar/Navbar";
import Trading from "./Pages/Trading/Trading"
import Dashboard from "./Pages/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Trades from "./Pages/Trading/Trades/Trades";
import Login from "./Pages/Login/Login";
import Portfolio from "./Pages/Trading/Portfolio/Portfolio";



const App = () => {


  const user = true;

  return (

    <div className="App">
      {user ? <div class="container-fluid">
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
                <Route path="/trades" element={<Trades />}>
                </Route>
                <Route path="/login" element={<Login />}>
                </Route>
                <Route path="/portfolio" element={<Portfolio />}>
                </Route>
              </Routes>
            </Router>
          </div>
        </div>
      </div> : <Login />}


    </div>
  );
}

export default App;
