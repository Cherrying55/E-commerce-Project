import { render } from "react-dom";
import App2 from "./App2.js";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

render(<Provider store={store}><App2 /></Provider>, document.querySelector(".root"));
