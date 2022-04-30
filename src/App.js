
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
import Add_Account from "./Pages/User/Add_Account/Add_Account"


import Trade_Edit from "./Pages/Log/Trade_Edit/Trade_Edit";
import User_Edit from "./Pages/Log/User_Edit/User_Edit";
import Auto from "./Pages/Log/Auto/Auto";
import Cross from "./Pages/Log/Cross/Cross";
import Rejection from "./Pages/Log/Rejection/Rejection";


import Cash_Ledge from "./Pages/Accounts/Cash_Ledge/Cash_Ledge";
import Cash_Entry from "./Pages/Accounts/Cash_Entry/Cash_Entry";
import JV from "./Pages/Accounts/JV/JV";
import JV_Broker from "./Pages/Accounts/JV_Broker/JV_Broker";
import Deposit from "./Pages/Accounts/Deposit/Deposit";
import Valan from "./Pages/Accounts/Valan/Valan";


import Trade_Report from "./Pages/Report/Trade_Report/Trade_Report";
import Ledge_Report from "./Pages/Report/Ledge_Report/Ledge_Report";
import Deposit_Report from "./Pages/Report/Deposit_Report/Deposit_Report";
import Trial from "./Pages/Report/Trial/Trial";
import Client_Report from "./Pages/Report/Client_Report/Client_Report";


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


                <Route path="/all-user" element={<All_User />}>
                </Route>
                <Route path="/userlist" element={<Userlist />}>
                </Route>
                <Route path="/add-account" element={<Add_Account />}>
                </Route>


                {/* Log */}


                <Route path="/trade-edit" element={<Trade_Edit />}>
                </Route>
                <Route path="/user-edit" element={<User_Edit />}>
                </Route>
                <Route path="/auto" element={<Auto />}>
                </Route>
                <Route path="/cross" element={<Cross />}>
                </Route>
                <Route path="/rejection" element={<Rejection />}>
                </Route>


                {/* Accounts */}


                <Route path="/cash-ledge" element={<Cash_Ledge />}>
                </Route>
                <Route path="/cash-entry" element={<Cash_Entry />}>
                </Route>
                <Route path="/jv" element={<JV />}>
                </Route>
                <Route path="/jv-broker" element={<JV_Broker />}>
                </Route>
                <Route path="/deposit" element={<Deposit />}>
                </Route>
                <Route path="/valan" element={<Valan />}>
                </Route>


                {/* Report */}


                <Route path="/trade-report" element={<Trade_Report />}>
                </Route>
                <Route path="/ledge-report" element={<Ledge_Report />}>
                </Route>
                <Route path="/deposit-report" element={<Deposit_Report />}>
                </Route>
                <Route path="/trial" element={<Trial />}>
                </Route>
                <Route path="/client-report" element={<Client_Report />}>
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
