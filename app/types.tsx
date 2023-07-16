// product
export interface ProductType {
  id: string;
  ean: string;
  price: number;
  quantity: number;
}

// address
export interface AdressType {
  invoice: boolean;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  street: string;
  postCode: string;
  companyName: string;
  companyNip: string;
  companyStreet: string;
  companyCity: string;
  companyPostCode: string;
}

// payment
export interface PaymentType {
  id: string;
  name: string;
  icon: string;
}

// delivery
export interface DeliveryType {
  id: string;
  name: string;
  price: number;
}

// step
export interface StepType {
  label: string;
  value: string;
  icon: any;
}
