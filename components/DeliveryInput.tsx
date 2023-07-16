import React from "react";
import { DeliveryType } from "@/app/types";
import { useDispatch, useSelector } from "react-redux";
import { setDelivery } from "@/redux/features/orderSlice";

const DeliveryInput = (delivery: DeliveryType) => {
  const dispatch = useDispatch();
  const { delivery: selectedDelivery } = useSelector(
    (state: any) => state.order.order
  );

  console.log(selectedDelivery);

  const handleDelivery = () => {
    dispatch(setDelivery(delivery));
  };

  return (
    <div
      className={`flex items-center justify-between gap-4 h-[50px] px-2`.concat(
        selectedDelivery.id === delivery.id
          ? " border-2 border-emerald-600"
          : " border border-neutral-400"
      )}
      key={delivery.id}
      onClick={() => handleDelivery()}
    >
      <div>
        <input
          type="radio"
          name="delivery"
          id={delivery.name}
          className="w-4 h-4"
        />
        <label htmlFor={delivery.name}>{delivery.name}</label>
      </div>
      <span>{delivery.price}</span>
    </div>
  );
};

export default DeliveryInput;
