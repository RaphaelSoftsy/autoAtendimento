import React, { useState } from 'react';
import './cardForm.css';

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState('4568 4568 4568 1235');
  const [cardName, setCardName] = useState('Millena F. Sousa');
  const [cardMonth, setCardMonth] = useState('11');
  const [cardYear, setCardYear] = useState('25');
  const [cardCvv, setCardCvv] = useState('');
  const [cardBrand, setCardBrand] = useState('visa');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardMonthChange = (e) => {
    setCardMonth(e.target.value);
  };

  const handleCardYearChange = (e) => {
    setCardYear(e.target.value);
  };

  const handleCardCvvChange = (e) => {
    setCardCvv(e.target.value);
  };

  const handleCardBrandChange = (e) => {
    setCardBrand(e.target.value);
  };

  return (
    <>
      <div className="card-preview">
        <div className='banner-card'>
          <img src="https://img.icons8.com/color/48/000000/sim-card-chip--v1.png" alt="" className='' />
          <img src={cardBrand === 'visa' ? 'https://img.icons8.com/color/48/000000/visa.png' : 'https://img.icons8.com/color/48/000000/mastercard.png'} alt="brand" />
        </div>
        <div className='number-card'>
          <span>{cardNumber}</span>
        </div>
        <div className='card-data'>
          <div className='name-validity-card'>
            <span>Nome</span>
            <span>Validade</span>
          </div>
          <div className='name-validity-card-value'>
            <span>{cardName}</span>
            <span>{cardMonth}/{cardYear}</span>
          </div>
        </div>
      </div>
      <div className="card-form-container">
        <div className='title-card-form'>
          <span>NUMERO CARTÃO</span>
          <input type="text" placeholder="Número do Cartão" className='card-input' value={cardNumber} onChange={handleCardNumberChange} />
        </div>
        <div className='title-card-form'>
          <span>NOME</span>
          <input type="text" placeholder="Nome" value={cardName} className='card-input' onChange={handleCardNameChange} />
        </div>

        <div className="expiration-cvv">
          <div className='title-card-form'>
            <span>VALIDADE</span>
            <div className='title-card-form-validaty'>
              <input type="text" placeholder="MM" value={cardMonth} className='card-input-validaty' onChange={handleCardMonthChange} />
              <input type="text" placeholder="YY" value={cardYear} className='card-input-validaty' onChange={handleCardYearChange} />
            </div>

          </div>
          <div className='title-card-form-cvv'>
            <span>CVV</span>
            <input type="text" placeholder="CVV" value={cardCvv} className='card-input-cvv' onChange={handleCardCvvChange} />
          </div>
        </div>
        <select value={cardBrand} onChange={handleCardBrandChange}>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
        </select>
      </div>
    </>

  );
};

export default CardForm;

