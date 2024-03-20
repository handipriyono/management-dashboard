import { useEffect, useState } from "react";
import { useOrderListQuery } from "./useOrderQuery";

const useOrderManagement = () => {
  const [page, setPage] = useState(0);

  const onClickPage = (p: number) => {
    setPage(p);
  };

  useEffect(() => {
    setPage(1);
  }, []);

  const { data } = useOrderListQuery({ page });

  return {
    data,
    onClickPage,
    page,
    setPage,
  };
};

export default useOrderManagement;
