import React, { useState } from "react";

import "./ExpenseForm.css";

const CardForm = (props) => {
    const [enteredQuestion, setEnteredQuestion] = useState('');
    const [enteredAnswer, setEnteredAnswer] = useState('');

    const questionChangeHandler = (event) => {
        setEnteredQuestion(event.target.value);
    };

    const answerChangeHandler = (event) => {
        setEnteredAnswer(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const cardData = {
            question: enteredQuestion,
            answer: enteredAnswer
        };
        props.onPassCardData(cardData);
        setEnteredQuestion('');
        setEnteredAnswer('');
    };

     
  return (
    <form onSubmit={submitHandler}>
      <div className='new-card_allInputs'>
        <div className='new-expense_input'>
          <label>Question</label>
          <input 
            type='text' 
            value={enteredTitle} 
            onChange={questionChangeHandler} 
          />
        </div>
        <div className='new-expense_input'>
          <label>Answer</label>
          <input 
            type='text' 
            value={enteredTitle}
            onChange={answerChangeHandler}
          />
        </div>
      </div>
      <div className='new-card_actions'>
        <button type='submit'>Add Card</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
