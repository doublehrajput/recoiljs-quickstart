import { selector, selectorFamily } from "recoil";
import { transactionsAtom } from "./atoms";

/**
 * @type {import ("recoil").RecoilValueReadOnly<number>}
 */
export const balanceSelector = selector({
  key: "balanceSelector",
  get: ({ get }) => {
    let transactions = get(transactionsAtom);
    return transactions.reduce(
      (accumlator, transaction) => accumlator + transaction.amount,
      0
    );
  },
});
