import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const initialExpenses = [
  {id: uuid(), charge:"rent", amount:1600},
  {id: uuid(), charge:"car payment", amount:400},
  {id: uuid(), charge:"credit card bill", amount:1200}
];

function App() {
  // *********************** state values *******************//
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState('');
  // single amount
  const [amount, setAmount] = useState('');
  // alert
  const [alert, setAlert] = useState({show:false});

  // *********************** functionality *******************//
  // handle charge function
  const handleCharge = e => {
    setCharge(e.target.value)
  }
  //handle amount function
  const handleAmount = e => {
    setAmount(e.target.value)
  }
  // handle alert function
  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text});
    setTimeout(() => {
      setAlert({show:false});
    }, 3000);
  }
  // handle submit function
  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== '' && amount > 0){
      const singleExpense = {id:uuid(), charge, amount};
      setExpenses([...expenses, singleExpense]);
      setCharge('');
      setAmount('');
    } else {
      // handle alert
    }
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget Calculator</h1>
      <main className='App'>
        <ExpenseForm
          charge={charge}
          amount ={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit} />
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        Total Spending: <span className='total'>$ {expenses.reduce((accumulator, current) => {
          return (accumulator += parseInt(current.amount));
        }, 0)}</span>
      </h1>
    </>
  );
}

export default App;
