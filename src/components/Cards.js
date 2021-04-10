import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Waste Management Techniques!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Promoting a healthy environment '
              label='BioMedical'
              path='/Resentdatas'
            />
            <CardItem
              src='images/img-2.jpg'
              text='recycle reuse reduce'
              label='R3'
              path='/Resentdatas'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jfif'
              text='Dumb Yard On Nature'
              label='Toxic'
              path='/Resentdatas'
            />
           
            <CardItem
              src='images/img-8.jpg'
              text='The Bruhat Bengaluru Mahanagara Palike'
              label='(BBMP)'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
