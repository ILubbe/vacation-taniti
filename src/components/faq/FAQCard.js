import React from 'react';
import './FAQCard.css';

function FAQCard({ question, answer }) {
    return (
    <div className="faq-container">
        <div className="faq-card">
            <h3 className="faq-question">{question}</h3>
            <p className="faq-answer">{answer}</p>
        </div>
    </div>
    );
}

export default FAQCard;
