import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CartsList from "../../components/CartsList";
import { Link } from "react-router-dom";

export default function Carts() {
  const [carts, setcarts] = useState([]);

  useEffect(() => {
    async function getCarts() {
      const res = await axios.get("https://dummyjson.com/carts");
      const data = res.data.carts;
      setcarts(data);
    }
    getCarts();
  }, []);

  return (
    <div>
      Carts
      <br />
      <Link to="/">홈으로</Link>
      <div>
        {carts.map((element) => {
          return <CartsList key={element.id} props={element} />;
        })}
      </div>
    </div>
  );
}
