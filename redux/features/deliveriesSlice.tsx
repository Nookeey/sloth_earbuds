import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { DeliveryType } from "@/app/types";

interface deliveriesState {
  deliveries: DeliveryType[];
}

const initialState: deliveriesState = {
  deliveries: [
    {
      id: "1",
      name: "Kurier DHL",
      price: 10.0,
    },
    {
      id: "2",
      name: "Poczta Polska",
      price: 15.0,
    },
    {
      id: "3",
      name: "Kurier InPost",
      price: 12.0,
    },
    {
      id: "4",
      name: "Paczkomat InPost",
      price: 0.0,
    },
  ],
};

export const deliveriesSlice = createSlice({
  name: "deliveries",
  initialState,
  reducers: {},
});

export const {} = deliveriesSlice.actions;

export const selectCount = (state: RootState) => state;

export default deliveriesSlice.reducer;
