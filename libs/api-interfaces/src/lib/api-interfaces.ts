export interface Message {
  message: string;
}

export interface Car {
  make: string;
  model: string;
  year: number;
  vin: string;
}
export interface Company {
  id: string;
  companyName: string;
  vatNo: string;
  street: string;
  city: string;
  country: string;
  contact: string;
  cars: Car[];
}

export interface LineItem {
  id: string;
  product: string;
  price: number;
  quantity: number;
}

export interface Invoice {
  id: string;
  company: Company;
  lineItems: LineItem[];
}

export interface ApiResponse<T> {
  data: T[];
  count: number;
}
