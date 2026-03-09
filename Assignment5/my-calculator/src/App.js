import React, { useState } from 'react';

function Calculator() {
  // State for inputs and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  // Surgical Logic: One function to handle all operations
  const handleCalculation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case 'add': setResult(n1 + n2); break;
      case 'sub': setResult(n1 - n2); break;
      case 'mul': setResult(n1 * n2); break;
      case 'div': setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero"); break;
      default: break;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>React Calculator</h2>
      
      {/* Input Fields */}
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Enter Number 1"
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Enter Number 2"
      />

      <br /><br />

      {/* Buttons */}
      <button onClick={() => handleCalculation('add')}>Add</button>
      <button onClick={() => handleCalculation('sub')}>Subtract</button>
      <button onClick={() => handleCalculation('mul')}>Multiply</button>
      <button onClick={() => handleCalculation('div')}>Divide</button>

      <br /><br />

      {/* Output Div */}
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
        Result: {result}
      </div>
    </div>
  );
}

export default Calculator;