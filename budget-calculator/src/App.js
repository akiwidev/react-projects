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
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className='App'>
        <ExpenseForm />
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        Total Spending: <span className='total'>$ {expenses.reduce((accumulator, current) => {
          return (accumulator += current.amount);
        }, 0)}</span>
      </h1>
    </>
  );
}

export default App;
