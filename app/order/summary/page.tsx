"use client";

import OrderForm from "@/components/OrderForm";
import OrderTitle from "@/components/OrderTitle";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { OrderState } from "@/redux/features/orderSlice";
import Image from "next/image";

const Payment = () => {
  const router = useRouter();
  const { product, adress, payment, delivery } = useSelector(
    (state: any) => state.order.order
  );

  console.log([product, adress, payment, delivery]);

  const handlePrevStep = () => {
    router.push("/order/delivery");
  };

  const handleNextStep = () => {
    router.push("/order/confirmation");
  };

  const getPriceWithCurrency = (price: number) => {
    return price.toFixed(2).replace(".", ",") + " zł";
  };

  return (
    <OrderForm>
      <div className="w-full max-w-3xl mx-auto mt-4 border border-neutral-200 p-6">
        <OrderTitle title="Podsumowanie" />

        <div className="mb-6">
          <div className="border-b border-neutral-400">
            <h3 className="text-sm font-medium">Produkt</h3>
          </div>
          <div className="mt-2 flex flex-wrap md:flex-nowrap gap-4">
            <div className="w-[100px]">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
                width={100}
                height={100}
              />
            </div>
            <div className="flex justify-between w-full">
              <h3 className="text-sm">
                <span className="font-medium">{product.name}</span> <br />{" "}
                {product.quantity}x - {getPriceWithCurrency(product.price)}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {getPriceWithCurrency(product.price * product.quantity)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="mb-6 w-full">
            <div className="border-b border-neutral-400">
              <h3 className="text-sm font-medium">Adres</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              {adress.email}
              <br />
              {adress.firstName} {adress.lastName}
              <br />
              {adress.phone}
              <br />
              {adress.street}
              <br />
              {adress.postCode} {adress.city}
            </p>
          </div>
          {adress.invoice && (
            <div className="mb-6 w-full">
              <div className="border-b border-neutral-400">
                <h3 className="text-sm font-medium">Dane do faktury</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                {adress.companyName}
                <br />
                {adress.companyNip}
                <br />
                {adress.companyStreet}
                <br />
                {adress.companyPostCode} {adress.companyCity}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="mb-6 w-full">
            <div className="border-b border-neutral-400">
              <h3 className="text-sm font-medium">Płatność</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600">{payment.name}</p>
          </div>

          <div className="mb-6 w-full">
            <div className="border-b border-neutral-400">
              <h3 className="text-sm font-medium">Dostawa</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600">{delivery.name}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="border-b border-neutral-400">
            <h3 className="text-sm font-medium">Podsumowanie</h3>
          </div>
          <div className="mt-2 flex flex-col flex-wrap md:flex-nowrap gap-2">
            <div className="flex justify-between w-full">
              <h3 className="text-sm">Wartość produktów</h3>
              <p className="mt-2 text-sm text-neutral-600">
                {getPriceWithCurrency(product.price * product.quantity)}
              </p>
            </div>
            <div className="flex justify-between w-full">
              <h3 className="text-sm">Dostawa</h3>
              <p className="mt-2 text-sm text-neutral-600">
                {getPriceWithCurrency(delivery.price)}
              </p>
            </div>
            <div className="flex justify-between w-full">
              <h3 className="text-sm font-medium">Razem</h3>
              <p className="mt-2 text-sm text-neutral-600 font-medium">
                {getPriceWithCurrency(
                  product.price * product.quantity + delivery.price
                )}
              </p>
            </div>
          </div>
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
