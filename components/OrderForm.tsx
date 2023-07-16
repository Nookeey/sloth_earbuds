"use client";

import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setCurrentStep } from "@/redux/features/stepsSlice";

import { AiOutlineHome } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BiPackage } from "react-icons/bi";

import { StepType } from "@/app/types";

interface Props {
  children: React.ReactNode;
}

export enum Step {
  ADRESS = "adress",
  PAYMENT = "payment",
  DELIVERY = "delivery",
  SUMMARY = "summary",
}

const steps: StepType[] = [
  {
    label: "Adres",
    value: Step.ADRESS,
    icon: AiOutlineHome,
  },
  {
    label: "Płatność",
    value: Step.PAYMENT,
    icon: MdPayment,
  },
  {
    label: "Dostawa",
    value: Step.DELIVERY,
    icon: TbTruckDelivery,
  },
  {
    label: "Podsumowanie",
    value: Step.SUMMARY,
    icon: BiPackage,
  },
];

const OrderForm = ({ children }: Props) => {
  const currentStep = useSelector((state: any) => state.steps.currentStep);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div className="border-b border-neutral-200 dark:border-neutral-700 w-full max-w-3xl mx-auto">
        <ul className="flex flex-wrap justify-between -mb-px text-sm font-medium text-center text-neutral-500 dark:text-neutral-400">
          {steps.map((item) => (
            <li
              key={item.value}
              onClick={() => dispatch(setCurrentStep(item.value))}
              className={`mr-2 inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg 
              ${
                currentStep === item.value
                  ? "border-emerald-600"
                  : "border-transparent"
              }
               hover:text-neutral-600 hover:border-neutral-300 dark:hover:text-neutral-300 group hover:cursor-pointer`}
            >
              <item.icon
                className="w-4 h-4 mr-2 text-neutral-400 group-hover:text-neutral-500 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                aria-hidden="true"
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default OrderForm;
