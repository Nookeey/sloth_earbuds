import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface currentStepState {
  currentStep: string;
}

// Define the initial state using that type
const initialState: currentStepState = {
  currentStep: "adress",
};

export const stepsSlice = createSlice({
  name: "steps",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<string>) => {
      console.log("action.payload", action.payload);
      state.currentStep = action.payload;
    },
    setPrevStep: (state) => {
      console.log("setPrevStep");
      const steps = ["adress", "payment", "delivery", "summary"];
      const currentStepIndex = steps.findIndex(
        (step) => step === state.currentStep
      );
      console.log("currentStepIndex", currentStepIndex);
      if (currentStepIndex > 0) {
        state.currentStep = steps[currentStepIndex - 1];
      }
    },
    setNextStep: (state) => {
      console.log("setNextStep");
      const steps = ["adress", "payment", "delivery", "summary"];
      const currentStepIndex = steps.findIndex(
        (step) => step === state.currentStep
      );
      console.log("currentStepIndex", currentStepIndex);
      if (currentStepIndex < steps.length - 1) {
        state.currentStep = steps[currentStepIndex + 1];
      }
    },
  },
});

export const { setCurrentStep, setPrevStep, setNextStep } = stepsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default stepsSlice.reducer;
