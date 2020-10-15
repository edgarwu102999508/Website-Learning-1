import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { path, text, label, src } = props;

  return (
    <Fragment>
      <li className='card_item'>
        <Link className='card_item_link' to={path}>
          <figure className='card_item_pic-wrap' image-category={label}>
            <img src={src} alt='Travel_image' className='card_item_img' />
          </figure>
          <div className='card_item_info'>
            <h5 className='card_item_text'>{text}</h5>
          </div>
        </Link>
      </li>
    </Fragment>
  );
}

export default Card;
