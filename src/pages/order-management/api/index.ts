import AxiosAPI from "../../../commons/helpers/axios";
import JSONDummy from "./dummy.json";

const URLDummy = "https://dummyjson.com/products";

type TParams = {
  page: number;
};

type TDataCreate = {};

type TDelete = {
  id: number;
};

const getDataOrder = async ({ page }: TParams) => {
  const pageSize = 10;
  try {
    await AxiosAPI.get(`${URLDummy}/${page}`); //todo: replace dummy
    const finalPage = page - 1;
    const data = Array(10)
      .fill(0)
      .map((_, i) => {
        const id = finalPage * pageSize + (i + 1);
        const items = JSONDummy?.[i];
        return {
          ...items,
          id,
          no: id,
          username: `${items?.username} (${id})`,
          orderNumber: `${items?.orderNumber} (${id})`,
          total: `${items?.total}.${id}`,
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

const createOrder = async (data: TDataCreate) => {
  try {
    await AxiosAPI.post(`${URLDummy}/add`, data); //todo: replace dummy
    return true;
  } catch (error) {
    console.error(error);
  }
};

const deleteOrder = async ({ id }: TDelete) => {
  try {
    await AxiosAPI.delete(`${URLDummy}/${id}`); //todo: replace dummy
    return true;
  } catch (error) {
    console.error(error);
  }
};

const updateOrder = async (data: TDataCreate) => {
  try {
    await AxiosAPI.put(`${URLDummy}/1`, data); //todo: replace dummy
    return true;
  } catch (error) {
    console.error(error);
    return true;
  }
};

export { getDataOrder, createOrder, deleteOrder, updateOrder };
