import React from "react";
import Button from "../../atom/Button";

export default function CardProduct(props) {
  const { children } = props;
  return (
    <>
      <div className="rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1 shadow-xl">
        <div className="w-full max-w-xs bg-white rounded-lg">{children}</div>
      </div>
    </>
  );
}

const Header = (props) => {
  const { images } = props;
  return (
    <a href="#">
      <img src={images} alt="gambar" className="p-4 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <>
      <div className="flex flex-col items-center justify-center px-5 pb-4">
        <a href="#">
          <h5 className="text-3xl font-bold text-slate-900">{title}</h5>
          <p className="mt-1 text-slate-500 text-base text-justify">
            {children}
          </p>
        </a>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { children, handleToCart, id, price } = props;
  return (
    <>
      <div className="flex flex-col items-center justify-center px-5 pb-4">
        <a href="#">
          {price}
          <h1 className="mt-1 text-slate-500 text-justify font-bold text-[40px]">
            {children}
          </h1>

          <Button
            className="font-bold text-blue-500 bg-yellow-500"
            onClick={() => handleToCart(id)}
          >
            Pesan
          </Button>
        </a>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
