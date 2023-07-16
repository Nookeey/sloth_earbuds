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

  const { register, handleSubmit, formState } = useForm<AdressType>({
    defaultValues: {
      invoice: adress.invoice,
      email: adress.email,
      firstName: adress.firstName,
      lastName: adress.lastName,
      phone: adress.phone,
      city: adress.city,
      street: adress.street,
      postCode: adress.postCode,
      companyName: adress.companyName,
      companyNip: adress.companyNip,
      companyStreet: adress.companyStreet,
      companyCity: adress.companyCity,
      companyPostCode: adress.companyPostCode,
    },
  });

  const { errors } = formState;

  const onSubmit = (data: AdressType) => {
    dispatch(setAdress({ adress: data }));
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
              {...register("invoice")}
              onChange={() =>
                dispatch(setInvoice({ invoice: !adress.invoice }))
              }
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
                  defaultValue={adress.email}
                  {...register("email", {
                    required: "Email jest wymagany",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Niepoprawny adres email",
                    },
                  })}
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
                  {...register("firstName", {
                    required: "Imię jest wymagane",
                  })}
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
                  {...register("lastName", {
                    required: "Nazwisko jest wymagane",
                  })}
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
                  {...register("phone", {
                    required: "Telefon jest wymagany",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Niepoprawny numer telefonu",
                    },
                  })}
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
                  {...register("street", {
                    required: "Ulica i numer jest wymagane",
                  })}
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
                  {...register("postCode", {
                    required: "Kod pocztowy jest wymagany",
                    pattern: {
                      value: /^[0-9]{2}-[0-9]{3}$/,
                      message: "Niepoprawny kod pocztowy",
                    },
                  })}
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
                  {...register("city", {
                    required: "Miasto jest wymagane",
                  })}
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
            <>
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
                      {...register("companyName", {
                        required: "Nazwa firmy jest wymagana",
                      })}
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
                      {...register("companyNip", {
                        required: "NIP jest wymagany",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Niepoprawny NIP",
                        },
                      })}
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
                      {...register("companyStreet", {
                        required: "Ulica i numer jest wymagane",
                      })}
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
                      {...register("companyPostCode", {
                        required: "Kod pocztowy jest wymagany",
                        pattern: {
                          value: /^[0-9]{2}-[0-9]{3}$/,
                          message: "Niepoprawny kod pocztowy",
                        },
                      })}
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
                      {...register("companyCity", {
                        required: "Miasto jest wymagane",
                      })}
                    />
                    {errors.companyCity && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.companyCity.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
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
