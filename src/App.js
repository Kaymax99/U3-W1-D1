import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <div>
        <ButtonComponent title="Bottone 1" BGColor="purple" padding="30" />
        <ButtonComponent title="Bottone 2" BGColor="orange" padding="20" />
        <ButtonComponent title="Bottone 3" BGColor="blue" padding="10" />
      </div>

      <div>
        <ImageComponent url="https://place.dog/300/300" alt="Doggo Pic" />
        <ImageComponent url="http://placekitten.com/300/300" alt="Catto Pic" />
      </div>
    </div>
  );
}

export default App;
