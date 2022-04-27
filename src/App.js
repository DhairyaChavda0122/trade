
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";

import Watchlist_Trading from "./Pages/Trading/Watchlist/Watchlist";
import Trades_Trading from "./Pages/Trading/Trades/Trades";
import Portfolio_Trading from "./Pages/Trading/Portfolio/Portfolio";
import Banned_Trading from "./Pages/Trading/Banned/Banned";
import Margin_Trading from "./Pages/Trading/Margin/Margin";



import Watchlist_Forex from "./Pages/Forex/Watchlist/Watchlist";
import Trades_Forex from "./Pages/Forex/Trades/Trades"
import Portfolio_Forex from "./Pages/Forex/Portfolio/Portfolio";
import Margin_Forex from "./Pages/Forex/Margin/Margin";


import All_User from "./Pages/User/All_Userlist/All_User"
import Userlist from "./Pages/User/Userlist/Userlist"



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
              <Route path="/login" element={<Login />}>
                </Route>


                <Route path="/dashboard" element={<Dashboard />}>
                </Route>


                {/* Trading */}


                
                <Route path="/watchlist-trading" element={<Watchlist_Trading />}>
                </Route>
                <Route path="/trades-trading" element={<Trades_Trading />}>
                </Route>
                
                <Route path="/portfolio-trading" element={<Portfolio_Trading />}>
                </Route>
                <Route path="/banned-trading" element={<Banned_Trading />}>
                </Route>
                <Route path="/margin-trading" element={<Margin_Trading />}>
                </Route>


                {/* Forex */}


                <Route path="/watchlist-forex" element={<Watchlist_Forex />}>
                </Route>
                <Route path="/trades-forex" element={<Trades_Forex />}>
                </Route>
                <Route path="/portfolio-forex" element={<Portfolio_Forex />}>
                </Route>
                <Route path="/margin-forex" element={<Margin_Forex />}>
                </Route>


                {/* User */}


                <Route path="/All-User" element={<All_User />}>
                </Route>
                <Route path="/Userlist" element={<Userlist />}>
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
