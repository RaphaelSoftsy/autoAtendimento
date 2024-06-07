import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      visa: /^4[0-9]{15}$/,
      mastercard: /^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
      diners: /(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/,
      amex: /^3[47][0-9]{13}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
      hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
      elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}/,
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

  // const handleCardBrandChange = (e) => {
  //   setCardBrand(e.target.value);
  // };

  return (
    <>
      <div className="card-form-container">
        <div className="card-preview">
          <div className='banner-card'>
            <img src={Chip} alt="chip" />
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

