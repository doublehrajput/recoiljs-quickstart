import React from "react";
import PropTypes from "prop-types";
import { currencyFormatter } from "@app/utils";
/**
 * @type {React.FC<import("types").TransactionListItemProps>}
 * @returns {React.FunctionComponentElement}
 */
const TransactionItem = ({ amount, id, text, onDelete }) => {
  let className = amount > 0 ? "plus" : "minus";
  return (
    <li className={className}>
      {text} <span>{currencyFormatter(amount)}</span>
      <button
        className="delete-btn"
        onClick={() => {
          onDelete(id);
        }}
      >
        x
      </button>
    </li>
  );
};

TransactionItem.defaultProps = {
  amount: 0,
  text: "",
};
TransactionItem.propTypes = {
  amount: PropTypes.number,
  text: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func,
};

export default TransactionItem;
