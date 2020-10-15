import React, { Fragment } from "react";
import CardList from "../../card/CardList";
import MainHeader from "../../header/MainHeader";

function Home() {
  return (
    <Fragment>
      <MainHeader />
      <CardList />
    </Fragment>
  );
}
export default Home;
