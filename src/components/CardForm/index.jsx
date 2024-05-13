import React, { useState } from 'react';
import './cardForm.css';
import Banco from '../../assets/bandeira-banco-do-brasil.png';
import Elo from '../../assets/elo.png';
import MasterCard from '../../assets/mastercard.png';
import Visa from '../../assets/visa.png';
import Chip from '../../assets/chip.png';
import { Link } from 'react-router-dom';


const CardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardBrand, setCardBrand] = useState('');

  const image = {
    'mastercard': MasterCard,
    'visa': Visa,
    'elo': Elo,
    'banco-do-brasil': Banco
  }

  const handleCardNumberChange = (e) => {
    let value = e.target.value;

    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    setCardNumber(value);
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
          <img src={Chip} alt="" className='' />
          <img src={image[cardBrand]} alt={cardBrand} />
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
          <input type="text" placeholder="Número do Cartão" className='card-input' value={cardNumber} onChange={handleCardNumberChange} maxLength={19} />
        </div>
        <div className='title-card-form'>
          <span>NOME</span>
          <input type="text" placeholder="Nome" value={cardName} className='card-input' onChange={handleCardNameChange} />
        </div>

        <div className="expiration-cvv">
          <div className='title-card-form'>
            <span>VALIDADE</span>
            <div className='title-card-form-validaty'>
              <input type="text" placeholder="MM" value={cardMonth} className='card-input-validaty' onChange={handleCardMonthChange} maxLength={2} />
              <input type="text" placeholder="AA" value={cardYear} className='card-input-validaty' onChange={handleCardYearChange} maxLength={2} />
            </div>

          </div>
          <div className='title-card-form-cvv'>
            <span>CVV</span>
            <input type="text" placeholder="CVV" value={cardCvv} className='card-input-cvv' onChange={handleCardCvvChange} maxLength={3} />
          </div>
        </div>
        <select value={cardBrand} onChange={handleCardBrandChange}>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="elo">Elo</option>
          <option value="banco-do-brasil">Banco do Brasil</option>
        </select>
        <Link className='cadastro'> Cadastrar </Link>
      </div>
    </>

  );
};

export default CardForm;

