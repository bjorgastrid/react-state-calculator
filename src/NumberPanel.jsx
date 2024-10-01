
function NumberPanel({calculation, setCalculation, calcIndex}){

    const clickFunction = (event) => {
    const newCalculation = [...calculation];
    newCalculation[calcIndex] = event.target.value;
    setCalculation(newCalculation)}
    
    return(
      <div className="panel">
        <p>{calculation[calcIndex]}</p>
        <div className="numbers">
          { [1, 2, 3, 4, 5, 6, 7, 8 , 9, 0].map( (x) => 
            <button 
              key = {x}
              value = {x} 
              onClick = {clickFunction}>
              {x}
            </button>) 
          }
          
          <button
            onClick = {() => {
              const newCalculation = [...calculation]
              newCalculation[calcIndex] = 0;
              setCalculation(newCalculation)
            }}
          >
            Clear
          </button>
        </div>
      </div>
    )
}

export default NumberPanel