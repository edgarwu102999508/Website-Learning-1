import React, { Fragment } from "react";
import "../../../App.scss";
import SubHeader from "../../header/SubHeader";

function Service() {
  return (
    <Fragment>
      <SubHeader page='service' title='Service Here' img='/images/img-2.jpg' />
      <div className='container'>
        <h1>Our Service</h1>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          optio aliquid ab quibusdam minima quia laborum nulla! Voluptas
          consequuntur repellendus ipsum. Inventore excepturi, fugit nesciunt
          ipsa qui quasi temporibus neque dolorum quisquam, odio itaque
          laudantium consequatur eaque praesentium sapiente sunt voluptas
          aliquid. Voluptas odio fugiat, quae ipsa eligendi sed ex.
        </p>
      </div>
    </Fragment>
  );
}

export default Service;
