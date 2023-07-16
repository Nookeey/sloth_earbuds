import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { PaymentType } from "@/app/types";

interface paymentsState {
  payments: PaymentType[];
}

const initialState: paymentsState = {
  payments: [
    {
      id: "1",
      name: "PayU",
      icon: "/images/payu.png",
    },
    {
      id: "2",
      name: "Płatność przy odbiorze",
      icon: "/images/cash_on_delivery.png",
    },
  ],
};

export const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    addPayment: (state, action: PayloadAction<PaymentType>) => {
      state.payments.push(action.payload);
    },
  },
});

export const {} = paymentsSlice.actions;

export const selectCount = (state: RootState) => state;

export default paymentsSlice.reducer;
