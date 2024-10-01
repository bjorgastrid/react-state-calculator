
function OperationPanel({calculation, setCalculation}){
    const clickFunction = (event) => {
      const newCalculation = [...calculation];
      newCalculation[1] = event.target.value;
      setCalculation(newCalculation)}
    return(
      <div className="panel">
        <p>{calculation[1]}</p>
        <div className="numbers">
          { ['+', '-', '*', '÷'].map( (x) => 
            <button 
              key= {x}
              value = {x} 
              onClick = {clickFunction}>
              {x}
            </button>) 
          }
        </div>
      </div>
    )
  }

  export default OperationPanel