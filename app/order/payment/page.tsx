"use client";

import { PaymentType } from "@/app/types";
import OrderForm from "@/components/OrderForm";
import OrderTitle from "@/components/OrderTitle";
import PaymentInput from "@/components/PaymentInput";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Payment = () => {
  const router = useRouter();
  const { payments } = useSelector((state: any) => state.payments);

  const handlePrevStep = () => {
    router.push("/order/adress");
  };

  const handleNextStep = () => {
    router.push("/order/delivery");
  };

  return (
    <OrderForm>
      <div className="w-full max-w-3xl mx-auto mt-4 border border-neutral-200 p-6">
        <OrderTitle title="Wybierz sposób płatności" />

        <div className="flex flex-col gap-4">
          {payments.map((payment: PaymentType) => (
            <PaymentInput key={payment.id} {...payment} />
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
