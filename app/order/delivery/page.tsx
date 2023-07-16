"use client";

import OrderForm from "@/components/OrderForm";
import OrderTitle from "@/components/OrderTitle";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { DeliveryType } from "@/app/types";
import DeliveryInput from "@/components/DeliveryInput";
import { useEffect } from "react";

const Payment = () => {
  const router = useRouter();
  const { deliveries } = useSelector((state: any) => state.deliveries);

  const handlePrevStep = () => {
    router.push("/order/payment");
  };

  const handleNextStep = () => {
    router.push("/order/summary");
  };

  return (
    <OrderForm>
      <div className="w-full max-w-3xl mx-auto mt-4 border border-neutral-200 p-6">
        <OrderTitle title="Wybierz sposób dostawy" />

        <div className="flex flex-col gap-4">
          {deliveries.map((delivery: DeliveryType) => (
            <DeliveryInput key={delivery.id} {...delivery} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto mt-4 flex items-center justify-between">
        <button
          className="px-10 py-3 text-sm font-medium text-white bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:bg-primary-500"
          onClick={() => handlePrevStep()}
        >
          Wstecz
        </button>

        <button
          className="px-10 py-3 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:bg-primary-500"
          onClick={() => handleNextStep()}
        >
          Dalej
        </button>
      </div>
    </OrderForm>
  );
};

export default Payment;
