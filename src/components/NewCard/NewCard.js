import React from 'react';

import CardForm from './CardForm'
import './NewCard.css';

const NewCard = (props) => {
    const passCardDataHandler = (enteredCardData) => {
        const cardData = {
            ...enteredCardData,
            id: Math.random().toString()
        };
        props.onAddCard(cardData);
    };

    return (
        <div className='new-card'>
            <CardForm onPassCardData={passCardDataHandler} />
        </div>
    );
};

export default NewExpense;