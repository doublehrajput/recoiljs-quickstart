import { RecoilRoot } from "recoil";

import "@app/App.scss";

import TransactionList from "@app/components/transaction/TransactionList";
import AddTransaction from "@app/components/forms/AddTransaction";
import Heading from "@app/components/Heading";

const App = () => {
  return (
    <RecoilRoot>
      <h2>Expense Tracker</h2>
      <div className="container">
        <h4>Your Balance</h4>
        <Heading />
        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">
              $0.00
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">
              $0.00
            </p>
          </div>
        </div>
        <TransactionList />
        <AddTransaction />
      </div>
    </RecoilRoot>
  );
};

App.defaultProps = {};
App.propTypes = {};

export default App;
