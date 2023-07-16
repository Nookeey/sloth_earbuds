"use client";

import OrderForm from "@/components/OrderForm";
import OrderTitle from "@/components/OrderTitle";
import { useRouter } from "next/navigation";

const Payment = () => {
  const router = useRouter();

  const handlePrevStep = () => {
    router.push("/order/delivery");
  };

  const handleNextStep = () => {
    router.push("/order/confirmation");
  };

  return (
    <OrderForm>
      <div className="w-full max-w-3xl mx-auto mt-4 border border-neutral-200 p-6">
        <OrderTitle title="Podsumowanie" />
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
