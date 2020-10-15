import React, { Fragment } from "react";
import "../../../App.scss";
import SubHeader from "../../header/SubHeader";

function Product() {
  return (
    <Fragment>
      <SubHeader page='product' title='Product' img='/images/img-4.jpg' />
      <div className='container'>
        <h1>Our Product</h1>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          optio aliquid ab quibusdam minima quia laborum nulla! Voluptas
          consequuntur repellendus ipsum. Inventore excepturi, fugit nesciunt
          ipsa qui quasi temporibus neque dolorum quisquam, odio itaque
          laudantium consequatur eaque praesentium sapiente sunt voluptas
          aliquid. Voluptas odio fugiat, quae ipsa eligendi sed ex.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          optio aliquid ab quibusdam minima quia laborum nulla! Voluptas
          consequuntur repellendus ipsum. Inventore excepturi, fugit nesciunt
          ipsa qui quasi temporibus neque dolorum quisquam, odio itaque
          laudantium consequatur eaque praesentium sapiente sunt voluptas
          aliquid. Voluptas odio fugiat, quae ipsa eligendi sed ex.
        </p>
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

export default Product;
