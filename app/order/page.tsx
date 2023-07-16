"use client";

import Footer from "@/components/Footer";
import OrderCard from "@/components/OrderCard";
import OrderForm from "@/components/OrderForm";
import React, { useState } from "react";

const Order = () => {
  const [order, setOrder] = useState(false);

  return (
    <div className="flex flex-col justify-between h-[100vh] bg-white">
      <section className="px-4">
        {order ? <OrderCard /> : <OrderForm />}
      </section>
      <Footer />
    </div>
  );
};

export default Order;
