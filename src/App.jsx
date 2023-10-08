import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [purchasePrice, setPurchasePrice] = useState(157);
  const [downPayment, setDownPayment] = useState(36);
  const [repaymentTime, setRepaymentTime] = useState(22);
  const [interestRate, setInterestRate] = useState(3);
  const [loanAmount, setLoanAmount] = useState(0);
  const [estimatedAmount, setEstimatedAmount] = useState(0);

  useEffect(()=> {
    const amount = purchasePrice - downPayment;
      const formulaUp = interestRate * Math.pow(1 + interestRate,repaymentTime /12);
      const formulaDown = Math.pow(1+interestRate,repaymentTime /12 ) -1 ;
      setLoanAmount(amount)
      setEstimatedAmount(amount * formulaUp / formulaDown)
  }, [purchasePrice, downPayment, repaymentTime, interestRate])
  
  return (
    <>
      <header>
        <h2> Mortgage calculator </h2>
      </header>
      <div className='calcul'>
        <div>
          <p> purchase price : ${purchasePrice} </p>
          <input type="range" id="purchase-price" name="purchase-price" min="0" max="1000" 
            value = {purchasePrice} onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}/>
          <p> down payment : ${downPayment} </p>
          <input type="range" id="down-payment" name="down-payment" min="0" max="100" 
          value = {downPayment} onChange={(e) => setDownPayment(parseFloat(e.target.value))}/>
          <p> repayment time : ${repaymentTime} years</p>
          <input type="range" id="repayment-time" name="repayment-time" min="0" max="50" 
          value = {repaymentTime} onChange={(e) => setRepaymentTime(e.target.value)}/>
        </div>
        <div>
        <p> interest rate : ${interestRate}% </p>
          <input type="range" id="interest-rate" name="interest-rate" min="0" max="100" 
          value = {interestRate} onChange={(e) => setInterestRate(e.target.value)}/>
          <p> loan amount ${loanAmount}</p>
          <p> estimated amount ${Math.ceil(estimatedAmount)} </p>
        </div>
      </div>
      <button> Get a Mortgage quote</button>
    </>
  )
}

export default App
