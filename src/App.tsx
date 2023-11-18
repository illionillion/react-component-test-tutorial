import { SimpleButton } from "./components/SimpleButton";

function App() {
  return (
    <div className="App">
      <SimpleButton onClick={() => console.log('clicked!!')} >ボタン</SimpleButton>
      <SimpleButton isDisabled onClick={() => console.log('clicked!!')} >ボタン</SimpleButton>
    </div>
  );
}

export default App;
