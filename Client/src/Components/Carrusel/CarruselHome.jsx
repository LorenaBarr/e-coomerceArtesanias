import React from "react";

const CarruselHome = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://www.istockphoto.com/es/foto/wayuu-mochilas-artesanales-bolsas-en-venta-en-el-mercado-de-guatap%C3%A9-gm624628062-109811601" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://www.istockphoto.com/es/vector/patr%C3%B3n-ornamento-tracer%C3%ADa-mosaico-%C3%A9tnico-folcl%C3%B3rico-nacional-geom%C3%A9trico-para-tela-gm1365902397-436612302" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://www.istockphoto.com/es/foto/artesan%C3%ADa-wayuu-gm1181690813-331532781" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://www.istockphoto.com/es/foto/bellas-obras-artesanales-en-r%C3%A1quira-boyac%C3%A1-gm1137349806-303266926" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default CarruselHome;