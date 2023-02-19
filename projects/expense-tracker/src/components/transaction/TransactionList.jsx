import { useRecoilState, useRecoilValue } from "recoil";

import { transactionsAtom } from "@app/store/atoms";
import TransactionItem from "@app/components/transaction/TransactionItem";

const TransactionList = () => {
  const [transactions, setTransactions] = useRecoilState(transactionsAtom);

  /**
   * @param {number} id
   */
  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            onDelete={deleteTransaction}
            {...transaction}
          />
        ))}
      </ul>
    </>
  );
};

TransactionList.defaultProps = {};
TransactionList.propTypes = {};

export default TransactionList;
