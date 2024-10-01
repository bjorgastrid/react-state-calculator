import "./App.css"
import {useState} from 'react'
import NumberPanel from "./NumberPanel"
import OperationPanel from "./OperationPanel"

function App() {

  const[calculation, setCalculation] = useState([0,'+',0,0])

  return (
    <div className="calculator">
      <NumberPanel calculation={calculation} setCalculation={setCalculation} calcIndex={0}/>
      <OperationPanel calculation={calculation} setCalculation={setCalculation}/>
      <NumberPanel calculation={calculation} setCalculation={setCalculation} calcIndex={2}/>
      <div className="panel answer">
        <p>{calculation[3]}</p>
        <div>
          <button
            onClick={() => {
              let result;
              switch(calculation[1]){
                case '+':
                  result = Number(calculation[0]) + Number(calculation[2]);
                  break;
                case '-':
                  result = Number(calculation[0] - calculation[2]);
                  break;
                case '*':
                  result = calculation[0] * calculation[2];
                  break;
                case '÷':
                  result = (calculation[0] / calculation[2]).toFixed(2);
              }
              setCalculation([... calculation.slice(0,3), result])
            }
            }>=</button>
        </div>
      </div>
    </div>
  )
}

export default App


