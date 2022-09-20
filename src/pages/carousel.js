import React from "react";
import Layout from "../components/Layout";
import "./carousel.scss"
function carousel() {
  return (
<Layout>

    <div className="Carousel-Contianer">
      <div className="Carousel-Contianer__One">content one</div>
      <div className="Carousel-Contianer__Two">content two</div>
      <div className="Carousel-Contianer__Three">content three</div>
      <div className="Carousel-Contianer__Four">content four</div>
      <div className="Carousel-Contianer__Five">content five</div>
      <div className="Carousel-Contianer__Six">content six</div>
    </div>
</Layout>
  );
}

export default carousel;
export const Head = () => <title>Carousel</title>;

