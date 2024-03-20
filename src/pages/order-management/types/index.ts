export type TCustomerItem = {
  no: number;
  name: string;
  email: string;
  username: string;
  address: string;
  status: string;
  totalOrder: string;
};

export type TOrderItem = {
  no: number;
  orderNumber: string;
  createdAt: string;
  username: string;
  status: number;
  total: string;
  productIds?: number[] | string[];
};

export type TCreateProduct = {
  username: string;
  productIds: string;
  address: string;
  note: string;
  id?: number;
};

export type TItemTable = {
  id?: number;
  no: number;
  orderNumber: string;
  createdAt: string;
  username: string;
  status: number;
  total: string;
};
