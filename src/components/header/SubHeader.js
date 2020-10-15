import React from "react";
import "./SubHeader.scss";

function SubHeader(props) {
  const { page, title, img } = props;

  const bgImg = {
    backgroundImage: "url(" + img + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <header className='subHeader-container' page={page} style={bgImg}>
      <h1>{title}</h1>
    </header>
  );
}

export default SubHeader;
