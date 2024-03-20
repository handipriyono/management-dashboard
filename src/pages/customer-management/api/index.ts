import AxiosAPI from "../../../../src/commons/helpers/axios";
import JSONDummy from "./dummy.json";

type TParams = {
  page: number;
};

type TDataCreate = {
  id?: number;
};

type TDelete = {
  id: number;
};

const getDataCustomer = async ({ page }: TParams) => {
  const pageSize = 10;
  try {
    await AxiosAPI.get(`https://dummyjson.com/products/${page}`); //todo: replace dummy
    const finalPage = page - 1;
    const data = Array(10)
      .fill(0)
      .map((_, i) => {
        const id = finalPage * pageSize + (i + 1);
        const items = JSONDummy?.[i];
        return {
          ...items,
          username: `${items?.username} (${id})`,
          name: `${items?.name} (${id})`,
          id,
          no: id,
          totalOrder: `${items?.totalOrder}${id}`,
        };
      });
    return {
      data,
      hasMore: finalPage < 9,
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
      hasMore: false,
    };
  }
};

const createCustomer = async (data: TDataCreate) => {
  try {
    await AxiosAPI.post("https://dummyjson.com/products/add", data); //todo: replace dummy
    return true;
  } catch (error) {
    console.error(error);
  }
};

const deleteCustomer = async ({ id }: TDelete) => {
  try {
    await AxiosAPI.delete(`https://dummyjson.com/products/${id}`); //todo: replace dummy
    return true;
  } catch (error) {
    console.error(error);
  }
};

const updateCustomer = async (data: TDataCreate) => {
  try {
    await AxiosAPI.put(`https://dummyjson.com/products/1`, data); //todo: replace dummy
    return true;
  } catch (error) {
    console.error(error);
    return true;
  }
};

export { getDataCustomer, createCustomer, deleteCustomer, updateCustomer };
