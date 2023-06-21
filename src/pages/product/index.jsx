import React from "react";
import CardProduct from "../../components/organism/CardProduct";
import { useState } from "react";
import Navbar from "../../components/organism/Navbar";
const data = [
  {
    id: 1,
    images: "public/images/test.jpg",
    desc: "apakek",
    price: 100000,
  },
  {
    id: 2,
    images: "public/images/test.jpg",
    desc: "apakek",
    price: 100000,
  },
  {
    id: 3,
    images: "public/images/test.jpg",
    desc: "apakek",
    price: 100000,
  },
];

export default function ProductsPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen justify-center items-center gap-x-10 pt-10">
        {/*<CardProduct>
        <CardProduct.Header image="public/images/test.jpg"/>
        <CardProduct.Body title="Ring Tinju" className="flex justify-center items-center">
        Wisata mistis ini merupakan bekas rumah sakit yang letaknya ada di depan gazebo Blambangan. Katanya, tempat ini menyimoan masa lalu sejarah yang kelam. Tempat wisata mistis asrama Inggrisan ini pernah dijadikan lokasi pembantaian pada zaman Belanda. jika malam telah tiba sering terdengar suara jeritan-jeritan minta tolong dan katanya sering terjadi penampakan seorang noni Belanda yang berlalu lalang di sekitar Asrama Inggrisan.
        </CardProduct.Body>
        <CardProduct.Footer>Rp500.000</CardProduct.Footer>
  </CardProduct>*/}
        {data.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header images={product.images} />
            <CardProduct.Body title={product.title}>
              {product.desc}
            </CardProduct.Body>
            <CardProduct.Footer
              price={product.price}
              id={product.id}
              handleToCart={handleToCart}
            />
          </CardProduct>
        ))}
        <table className="border px-2 py-4 rounded-lg table-auto border-separate border-spacing-x-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const datas = data.find((product) => product.id === item.id);
              return (
                <tr key={item.id}>
                  <td className="text-center">{DataTransfer.name}</td>
                  <td>
                    {datas.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td className="text-center">{item.qty}</td>
                  <td>
                    {(item.qty * datas.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
