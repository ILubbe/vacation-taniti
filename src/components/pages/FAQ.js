import React from 'react';
import FAQCard from '../faq/FAQCard';
import FAQData from '../faq/FAQData';
import '../faq/FAQCard.css';

const FAQ = () => (
  <div>
    <h1 className='subpageHeader'>FAQs</h1>
    {FAQData.map((item, index) => (
      <FAQCard
        key={index}
        question={item.question}
        answer={item.answer}
      />
    ))}
  </div>
);

export default FAQ;
