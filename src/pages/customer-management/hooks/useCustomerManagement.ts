import { useEffect, useState } from "react";

import { useCustomerQuery } from "../hooks/useCustomerQuery";

const useCustomerManagement = () => {
  const [page, setPage] = useState(0);

  const onClickPage = (p: number) => {
    setPage(p);
  };

  useEffect(() => {
    setPage(1);
  }, []);

  const { data } = useCustomerQuery({ page });

  return {
    data,
    onClickPage,
    page,
    setPage,
  };
};

export default useCustomerManagement;
