import ReactDOM from "react-dom";
import Corpo from "./components/Corpo";
import Nav from "./components/Nav";

function App() {
    return(
        <div>
            <Nav />
            <Corpo />
            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));