import React from "react";
import "./CardList.scss";
import Card from "./Card";

function CardList() {
  return (
    <section className='card-list'>
      <h1 className='card-list_title'>Check out these EPIC Destinations!</h1>
      <div className='card-list_container'>
        <div className='card-list_wrapper'>
          <ul className='card-list_items'>
            <Card
              src='/images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/service'
            />
            <Card
              src='/images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/service'
            />
          </ul>

          <ul className='card-list_items'>
            <Card
              src='/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/service'
            />
            <Card
              src='/images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/service'
            />
            <Card
              src='/images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/service'
            />
          </ul>
          <ul className='card-list_items'>
            <Card
              src='/images/img-1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Adventure'
              path='/service'
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
export default CardList;
