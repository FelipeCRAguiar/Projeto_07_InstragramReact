import ReactDOM from "react-dom";
import Corpo from "./components/Corpo";
import Nav from "./components/Nav";

function App() {
    return(
        <div>
            <Nav />
            <Corpo />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));