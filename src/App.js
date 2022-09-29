import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from "./components/Button";

const calcButton = [
  // declare in array
  ["MC", "M+", "M-", "MR"],
  ["C", "/", "X", "DEL"],
  [7, 8, 9, "-"],
  [4, 5, 6, "+"],
  [1, 2, 3, "="],
  ["%", 0, ".", " "],
];

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Screen/>
        {/* <h1>Calculator App</h1> */}
        <ButtonBox>
          {calcButton.flat().map((btn, i) => {
            <Button
              value={btn} 
              key={i}
            />
          })}
        </ButtonBox>
      </Wrapper>
      <footer>
        Credit To: Cand Dev
      </footer>
    </div>
  );
}

export default App;
