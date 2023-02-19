import { transactionsAtom } from "@app/store/atoms";
import { generateID } from "@app/utils";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

const AddTransaction = () => {
  const setTransactions = useSetRecoilState(transactionsAtom);
  const [data, setData] = useState({ text: "", amount: 0 });

  /**
   * @param {import("react").ChangeEvent<HTMLInputElement>} e
   */
  const onChangeText = (e) => {
    setData((prev) => ({ ...prev, text: e.target.value }));
  };

  /**
   * @param {import("react").ChangeEvent<HTMLInputElement>} e
   */
  const onChangeAmount = (e) => {
    setData((prev) => ({ ...prev, amount: e.target.valueAsNumber || 0 }));
  };

  /**
   *
   * @param {import("react").FormEvent<HTMLFormElement>} e
   */
  const onSubmit = (e) => {
    e.preventDefault();
    setTransactions((prev) => [...prev, { ...data, id: generateID() }]);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={data.text}
            onChange={onChangeText}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={data.amount}
            onChange={onChangeAmount}
          />
        </div>
        <button
          className="btn"
          disabled={data.amount === 0 || data.text === ""}
        >
          Add transaction
        </button>
      </form>
    </>
  );
};

AddTransaction.defaultProps = {};
AddTransaction.propTypes = {};

export default AddTransaction;
