/**
 * @summary
 * Recoil Atom Effect to store and retrieve data from localStorage
 *
 *
 * @example
 * import persistLocalstorageEffect from "./persistLocalstorageEffect";
 * import {atom} from "recoil"
 *
 * const dataAtom = atom({
 *   key: "dataAtom",
 *   effects_UNSTABLE[persistLocalstorageEffect]
 * })
 *
 *
 */
import { DefaultValue } from "recoil";

/**
 * @type {import("recoil").AtomEffect<any>}
 */
export default ({ onSet, setSelf, node }) => {
  const data = localStorage.getItem(node.key);

  if (data !== null) {
    setSelf(JSON.parse(data));
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(node.key);
    } else {
      localStorage.setItem(node.key, JSON.stringify(newValue));
    }
  });
};
