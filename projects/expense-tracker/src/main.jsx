import ReactDOM from "react-dom/client";

import { RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

import App from "@app/App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
