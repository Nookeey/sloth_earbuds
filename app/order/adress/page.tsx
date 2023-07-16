"use client";

import { useDispatch, useSelector } from "react-redux";
import { setAdress, setInvoice } from "@/redux/features/orderSlice";
import { AppDispatch } from "@/redux/store";
import { useForm } from "react-hook-form";
import { AdressType } from "@/app/types";
import OrderTitle from "@/components/OrderTitle";
import { useRouter } from "next/navigation";
import OrderForm from "@/components/OrderForm";

const Adress = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { adress } = useSelector((state: any) => state.order.order);

  const { register, handleSubmit, formState } = useForm<AdressType>();

  const { errors } = formState;

  const onSubmit = (data: AdressType) => {
    router.push("/order/payment");
  };

  return (
    <OrderForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full max-w-3xl mx-auto mt-4 border border-neutral-200 p-6">
          <OrderTitle title="Wypełnij adres dostawy" />
          <div className="flex items-center mb-6">
            <input
              id="invoice"
              type="checkbox"
              className="w-4 h-4 mr-2 text-primary-500 border border-neutral-300 rounded cursor-pointer focus:ring-primary-500"
              checked={adress.invoice}
              value={adress.invoice}
              {...register("invoice")}
              onChange={() => dispatch(setAdress({ invoice: !adress.invoice }))}
            />
            <label
              htmlFor="invoice"
              className="text-sm font-medium text-neutral-900 dark:text-neutral-100 cursor-pointer"
            >
              Chcę otrzymać fakturę
            </label>
          </div>

          <div className="flex flex-wrap gap-y-4 -mx-2">
            <div className="w-full px-2">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Email
                </label>
                <input
                  className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                  id="email"
                  type="email"
                  placeholder="np. test@test.pl"
                  value={adress.email}
                  {...register("email", {
                    required: "Email jest wymagany",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Niepoprawny adres email",
                    },
                  })}
                  onChange={(e) =>
                    dispatch(setAdress({ email: e.target.value }))
                  }
                />
                {errors.email && (
                  <span className="text-sm font-medium text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full px-2">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Imię
                </label>
                <input
                  className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                  id="firstName"
                  type="text"
                  placeholder="np. Jan"
                  value={adress.firstName}
                  {...register("firstName", {
                    required: "Imię jest wymagane",
                  })}
                  onChange={(e) =>
                    dispatch(setAdress({ firstName: e.target.value }))
                  }
                />
                {errors.firstName && (
                  <span className="text-sm font-medium text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full px-2">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Nazwisko
                </label>
                <input
                  className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                  id="lastName"
                  type="text"
                  placeholder="np. Kowalski"
                  value={adress.lastName}
                  {...register("lastName", {
                    required: "Nazwisko jest wymagane",
                  })}
                  onChange={(e) =>
                    dispatch(setAdress({ lastName: e.target.value }))
                  }
                />
                {errors.lastName && (
                  <span className="text-sm font-medium text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full sm:w-1/2 px-2">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Telefon
                </label>
                <input
                  className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                  id="phone"
                  type="text"
                  placeholder="np. 123456789"
                  value={adress.phone}
                  {...register("phone", {
                    required: "Telefon jest wymagany",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Niepoprawny numer telefonu",
                    },
                  })}
                  onChange={(e) =>
                    dispatch(setAdress({ phone: e.target.value }))
                  }
                />
                {errors.phone && (
                  <span className="text-sm font-medium text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Ulica i numer
                </label>
                <input
                  className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                  id="street"
                  type="text"
                  placeholder="np. ul. Przykładowa 1"
                  value={adress.street}
                  {...register("street", {
                    required: "Ulica i numer jest wymagane",
                  })}
                  onChange={(e) =>
                    dispatch(setAdress({ street: e.target.value }))
                  }
                />
                {errors.street && (
                  <span className="text-sm font-medium text-red-500">
                    {errors.street.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full sm:w-1/2 px-2">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Kod pocztowy
                </label>
                <input
                  className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                  id="postCode"
                  type="text"
                  placeholder="np. 00-000"
                  value={adress.postCode}
                  {...register("postCode", {
                    required: "Kod pocztowy jest wymagany",
                    pattern: {
                      value: /^[0-9]{2}-[0-9]{3}$/,
                      message: "Niepoprawny kod pocztowy",
                    },
                  })}
                  onChange={(e) =>
                    dispatch(setAdress({ postCode: e.target.value }))
                  }
                />
                {errors.postCode && (
                  <span className="text-sm font-medium text-red-500">
                    {errors.postCode.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Miasto
                </label>
                <input
                  className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                  id="city"
                  type="text"
                  placeholder="np. Warszawa"
                  value={adress.city}
                  {...register("city", {
                    required: "Miasto jest wymagane",
                  })}
                  onChange={(e) =>
                    dispatch(setAdress({ city: e.target.value }))
                  }
                />
                {errors.city && (
                  <span className="text-sm font-medium text-red-500">
                    {errors.city.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          {adress.invoice && (
            <div>
              <OrderTitle title="Wypełnij dane do faktury" className="mt-6" />
              <div className="flex flex-wrap gap-y-4 -mx-2">
                <div className="w-full px-2">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Firma
                    </label>
                    <input
                      className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                      id="companyName"
                      type="text"
                      placeholder="np. Firma sp. z o.o."
                      value={adress.companyName}
                      {...register("companyName", {
                        required: "Nazwa firmy jest wymagana",
                      })}
                      onChange={(e) =>
                        dispatch(setAdress({ companyName: e.target.value }))
                      }
                    />
                    {errors.companyName && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.companyName.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      NIP
                    </label>
                    <input
                      className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                      id="companyNip"
                      type="text"
                      placeholder="np. 1234567890"
                      value={adress.companyNip}
                      {...register("companyNip", {
                        required: "NIP jest wymagany",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Niepoprawny NIP",
                        },
                      })}
                      onChange={(e) =>
                        dispatch(setAdress({ companyNip: e.target.value }))
                      }
                    />
                    {errors.companyNip && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.companyNip.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Ulica i numer
                    </label>
                    <input
                      className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                      id="companyStreet"
                      type="text"
                      placeholder="np. ul. Przykładowa 1"
                      value={adress.companyStreet}
                      {...register("companyStreet", {
                        required: "Ulica i numer jest wymagane",
                      })}
                      onChange={(e) =>
                        dispatch(setAdress({ companyStreet: e.target.value }))
                      }
                    />
                    {errors.companyStreet && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.companyStreet.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Kod pocztowy
                    </label>
                    <input
                      className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                      id="companyPostCode"
                      type="text"
                      placeholder="np. 00-000"
                      value={adress.companyPostCode}
                      {...register("companyPostCode", {
                        required: "Kod pocztowy jest wymagany",
                        pattern: {
                          value: /^[0-9]{2}-[0-9]{3}$/,
                          message: "Niepoprawny kod pocztowy",
                        },
                      })}
                      onChange={(e) =>
                        dispatch(setAdress({ companyPostCode: e.target.value }))
                      }
                    />
                    {errors.companyPostCode && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.companyPostCode.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Miasto
                    </label>
                    <input
                      className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                      id="companyCity"
                      type="text"
                      placeholder="np. Warszawa"
                      value={adress.companyCity}
                      {...register("companyCity", {
                        required: "Miasto jest wymagane",
                      })}
                      onChange={(e) =>
                        dispatch(setAdress({ companyCity: e.target.value }))
                      }
                    />
                    {errors.companyCity && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.companyCity.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full max-w-3xl mx-auto mt-4 flex items-center justify-between">
          <button
            className="px-10 py-3 text-sm font-medium text-white bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:bg-primary-500"
            onClick={() => {}}
          >
            Wstecz
          </button>

          <button
            type="submit"
            className="px-10 py-3 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:bg-primary-500"
          >
            Dalej
          </button>
        </div>
      </form>
    </OrderForm>
  );
};

export default Adress;
