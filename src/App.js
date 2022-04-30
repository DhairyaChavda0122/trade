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

import TradeReport from "./Pages/Report/Trade_Report/Trade_Report";
import LedgeReport from "./Pages/Report/Ledge_Report/Ledge_Report";
import DepositReport from "./Pages/Report/Deposit_Report/Deposit_Report";
import Trial from "./Pages/Report/Trial/Trial";
import ClientReport from "./Pages/Report/Client_Report/Client_Report";

const App = () => {
  const user = true;

 

  return (
    <div className="App">


      
      {user ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
              <Navbar />
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
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

                  <Route path="/trade/all-user" element={<AllUser />}></Route>
                  <Route path="/trade/userlist" element={<Userlist />}></Route>

                  {/* Log */}

                  <Route
                    path="/trade/trade-edit"
                    element={<TradeEdit />}
                  ></Route>
                  <Route
                    path="/trade/user-edit"
                    element={<UserEdit />}
                  ></Route>
                  <Route path="/trade/auto" element={<Auto />}></Route>
                  <Route path="/trade/cross" element={<Cross />}></Route>
                  <Route
                    path="/trade/rejection"
                    element={<Rejection />}
                  ></Route>

                  {/* Accounts */}

                  <Route
                    path="/trade/cash-ledge"
                    element={<CashLedge />}
                  ></Route>
                  <Route
                    path="/trade/cash-entry"
                    element={<CashEntry />}
                  ></Route>
                  <Route path="/trade/jv" element={<JV />}></Route>
                  <Route
                    path="/trade/jv-broker"
                    element={<JVBroker />}
                  ></Route>
                  <Route path="/trade/deposit" element={<Deposit />}></Route>
                  <Route path="/trade/valan" element={<Valan />}></Route>


                  {/* Report */}


                  <Route
                    path="/trade/trade-report"
                    element={<TradeReport />}
                  ></Route><Route
                    path="/trade/ledge-report"
                    element={<LedgeReport />}
                  ></Route><Route
                    path="/trade/deposit-report"
                    element={<DepositReport />}
                  ></Route><Route
                    path="/trade/trial"
                    element={<Trial />}
                  ></Route><Route
                    path="/trade/client-report"
                    element={<ClientReport />}
                  ></Route>





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