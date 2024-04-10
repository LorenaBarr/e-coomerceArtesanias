import React from "react";

const CarruselHome = () => {
  return (
    <div className="carousel w-full h-[40%]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://previews.123rf.com/images/galitskaya/galitskaya1910/galitskaya191002147/132875359-banner-formato-largo-tienda-t%C3%ADpica-de-souvenirs-que-vende-souvenirs-y-artesan%C3%ADas-de-bali-en-el.jpg" className="w-full h-full object-contain" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://irp-cdn.multiscreensite.com/bacb77f7/MOBILE/jpg/1834451-banner-02.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://mundoejecutivo.com.mx/wp-content/uploads/2023/09/image-44-1.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://colombia.com.co/wp-content/uploads/2023/01/Banner-Artesani%CC%81as-de-Colombia-1210x340-1.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default CarruselHome;