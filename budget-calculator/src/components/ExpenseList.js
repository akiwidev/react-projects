import React from 'react';
import Item from './ExpenseItem';
import { FcEmptyTrash } from "react-icons/fc";

const ExpenseList = ({expenses, handleEdit, handleDelete, clearItems}) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return <Item key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />
        })
      }
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={clearItems}>Clear expenses <FcEmptyTrash className='btn-icon' />
        </button>
      )}
    </>
  )
}

export default ExpenseList
