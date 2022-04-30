import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";

import WatchlistTrading from "./Pages/Trading/Watchlist/Watchlist";
import TradesTrading from "./Pages/Trading/Trades/Trades";
import PortfolioTrading from "./Pages/Trading/Portfolio/Portfolio";
import BannedTrading from "./Pages/Trading/Banned/Banned";
import MarginTrading from "./Pages/Trading/Margin/Margin";

import WatchlistForex from "./Pages/Forex/Watchlist/Watchlist";
import TradesForex from "./Pages/Forex/Trades/Trades";
import PortfolioForex from "./Pages/Forex/Portfolio/Portfolio";
import MarginForex from "./Pages/Forex/Margin/Margin";

import AllUser from "./Pages/User/All_Userlist/All_User";
import Userlist from "./Pages/User/Userlist/Userlist";

import TradeEdit from "./Pages/Log/Trade_Edit/Trade_Edit";
import UserEdit from "./Pages/Log/User_Edit/User_Edit";
import Auto from "./Pages/Log/Auto/Auto";
import Cross from "./Pages/Log/Cross/Cross";
import Rejection from "./Pages/Log/Rejection/Rejection";

import CashLedge from "./Pages/Accounts/Cash_Ledge/Cash_Ledge";
import CashEntry from "./Pages/Accounts/Cash_Entry/Cash_Entry";
import JV from "./Pages/Accounts/JV/JV";
import JVBroker from "./Pages/Accounts/JV_Broker/JV_Broker";
import Deposit from "./Pages/Accounts/Deposit/Deposit";
import Valan from "./Pages/Accounts/Valan/Valan";

const App = () => {
  const user = true;

  return (
    <div className="App">
      {user ? (
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
              <Navbar />
            </div>
            <div class="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
              <Router>
                <Routes>
                  <Route path="/trade/login" element={<Login />}></Route>

                  <Route
                    path="/trade/dashboard"
                    element={<Dashboard />}
                  ></Route>

                  {/* Trading */}

                  <Route
                    path="/trade/watchlist-trading"
                    element={<WatchlistTrading />}
                  ></Route>
                  <Route
                    path="/trades-trading"
                    element={<TradesTrading />}
                  ></Route>

                  <Route
                    path="/trade/portfolio-trading"
                    element={<PortfolioTrading />}
                  ></Route>
                  <Route
                    path="/trade/banned-trading"
                    element={<BannedTrading />}
                  ></Route>
                  <Route
                    path="/trade/margin-trading"
                    element={<MarginTrading />}
                  ></Route>

                  {/* Forex */}

                  <Route
                    path="/trade/watchlist-forex"
                    element={<WatchlistForex />}
                  ></Route>
                  <Route
                    path="/trade/trades-forex"
                    element={<TradesForex />}
                  ></Route>
                  <Route
                    path="/trade/portfolio-forex"
                    element={<PortfolioForex />}
                  ></Route>
                  <Route
                    path="/trade/margin-forex"
                    element={<MarginForex />}
                  ></Route>

                  {/* User */}

                  <Route path="/trade/All-User" element={<AllUser />}></Route>
                  <Route path="/trade/Userlist" element={<Userlist />}></Route>

                  {/* Log */}

                  <Route
                    path="/trade/Trade-Edit"
                    element={<TradeEdit />}
                  ></Route>
                  <Route
                    path="/trade/User-Edit"
                    element={<UserEdit />}
                  ></Route>
                  <Route path="/trade/Auto" element={<Auto />}></Route>
                  <Route path="/trade/Cross" element={<Cross />}></Route>
                  <Route
                    path="/trade/Rejection"
                    element={<Rejection />}
                  ></Route>

                  {/* Accounts */}

                  <Route
                    path="/trade/CashLedge"
                    element={<CashLedge />}
                  ></Route>
                  <Route
                    path="/trade/CashEntry"
                    element={<CashEntry />}
                  ></Route>
                  <Route path="/trade/JV" element={<JV />}></Route>
                  <Route
                    path="/trade/JVBroker"
                    element={<JVBroker />}
                  ></Route>
                  <Route path="/trade/Deposit" element={<Deposit />}></Route>
                  <Route path="/trade/Valan" element={<Valan />}></Route>
                </Routes>
              </Router>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;