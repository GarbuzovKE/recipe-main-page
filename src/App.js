import "./App.scss";
import omeletteImg from "./images/image-omelette.jpeg";
import { Preparations } from "./components/Preparations";
import { Ingredients } from "./components/Ingredients";
import { Instructions } from "./components/Instructions";
import { Nutrition } from "./components/Nutrition";

function App() {
  return (
    <main className="App">
      <div className="header-wrapper">
        <img className="header-img" src={omeletteImg} alt="Omelette"></img>
      </div>
      <div id="content">
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <Preparations />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </main>
  );
}

export default App;
