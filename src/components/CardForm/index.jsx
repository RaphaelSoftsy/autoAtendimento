import React, { useState } from 'react';
import './cardForm.css';
import Chip from '../../assets/chip.png';

import MasterCard from '../../assets/mastercard.png';
import Visa from '../../assets/visa.png';
import Diners from '../../assets/diners.png';
import Amex from '../../assets/amex.png';
import Discover from '../../assets/discover.png';
import Hipercard from '../../assets/hipercard.png';
import Elo from '../../assets/elo.png';
import Jcb from '../../assets/jcb.png';

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
    'diners': Diners,
    'amex': Amex,
    'discover': Discover,
    'hipercard': Hipercard,
    'elo': Elo,
    'jcb': Jcb,
  }

  const getCardFlag = (cardnumber) => {
    var cardnumber = cardnumber.replace(/[^0-9]+/g, '');
    var cards = {
      visa: /^4[0-9]{12}(?:[0-9]{3})/,
      mastercard: /^5[1-5][0-9]{14}/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      amex: /^3[47][0-9]{13}/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
      hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
      elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}/
    };

    for (var flag in cards) {
      if (cards[flag].test(cardnumber)) {
        return flag;
      }
    }

    return false;
  };


  const handleCardNumberChange = (e) => {
    let value = e.target.value;

    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    setCardNumber(value);

    // Identifica a bandeira do cartão
    const flag = getCardFlag(value.replace(/\s/g, ''));
    if (flag) {
      setCardBrand(flag);
    }
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
        {/* <select value={cardBrand} onChange={handleCardBrandChange}>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="elo">Elo</option>
          <option value="banco-do-brasil">Banco do Brasil</option>
        </select> */}
        <Link className='cadastro'> Cadastrar </Link>
      </div>
    </>

  );
};

export default CardForm;

