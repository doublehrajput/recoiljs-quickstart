import { atom } from "recoil";

import persistLocalstorageEffect from "@app/recoil/effects/persistLocalstorageEffect";
/**
 * @type {import("recoil").RecoilState<import("types").Transaction[]>}
 */
export const transactionsAtom = atom({
  key: "transactionsAtom",
  default: [],
  effects_UNSTABLE: [persistLocalstorageEffect],
});
