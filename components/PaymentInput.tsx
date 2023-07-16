import React from "react";
import Image from "next/image";
import { PaymentType } from "@/app/types";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "@/redux/features/orderSlice";

const PaymentInput = (payment: PaymentType) => {
  const dispatch = useDispatch();
  const { payment: selectedPayment } = useSelector(
    (state: any) => state.order.order
  );

  console.log(selectedPayment);

  const handlePayment = () => {
    dispatch(setPayment(payment));
  };

  return (
    <div
      className={`flex items-center gap-4 h-[50px] px-2`.concat(
        selectedPayment.id === payment.id
          ? " border-2 border-emerald-600"
          : " border border-neutral-400"
      )}
      key={payment.id}
      onClick={() => handlePayment()}
    >
      <input
        type="radio"
        name="payment"
        id={payment.name}
        className="w-4 h-4"
      />
      <Image src={payment.icon} alt={payment.name} width={50} height={50} />
      <label htmlFor={payment.name}>{payment.name}</label>
    </div>
  );
};

export default PaymentInput;
