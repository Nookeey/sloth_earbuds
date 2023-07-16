import { createSlice } from "@reduxjs/toolkit";
import {
  ProductType,
  AdressType,
  PaymentType,
  DeliveryType,
} from "@/app/types";

export interface OrderState {
  order: {
    product: ProductType;
    adress: AdressType;
    payment: PaymentType;
    delivery: DeliveryType;
  };
}

const initialState: OrderState = {
  order: {
    product: {
      id: "1",
      ean: "32312412421341",
      price: 80.0,
      quantity: 2,
      name: "Słuchawki bezprzewodowe",
      image: "/images/header-product.png",
    },
    adress: {
      invoice: true,
      email: "test@test.pl",
      firstName: "t",
      lastName: "t",
      phone: "1",
      city: "t",
      street: "t",
      postCode: "00-000",
      companyName: "",
      companyNip: "",
      companyStreet: "",
      companyCity: "",
      companyPostCode: "",
    },
    payment: {
      id: "",
      name: "",
      icon: "",
    },
    delivery: {
      id: "",
      name: "",
      price: 0,
    },
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.order.product = action.payload;
    },
    setInvoice: (state, action) => {
      state.order.adress.invoice = action.payload;
    },
    setAdress: (state, action) => {
      console.log("set adress", action.payload);
      state.order.adress = { ...state.order.adress, ...action.payload };
      // state.order.adress = action.payload;
      console.log("get adress", state.order.adress);
    },
    setPayment: (state, action) => {
      state.order.payment = action.payload;
    },
    setDelivery: (state, action) => {
      state.order.delivery = action.payload;
    },
  },
});

export const { setProduct, setInvoice, setAdress, setPayment, setDelivery } =
  orderSlice.actions;

export default orderSlice.reducer;
