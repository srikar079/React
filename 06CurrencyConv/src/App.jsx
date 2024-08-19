import  { useState } from 'react';
import './index.css';
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount] = useState(0);

  return (
    <>
      <InputBox
        label="Amount"
        amount={amount}
        onAmount={setAmount}
      />
    </>
  );
}

export default App;