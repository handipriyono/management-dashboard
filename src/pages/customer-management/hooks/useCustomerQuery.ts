import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getDataCustomer,
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from "../api/index";

type TQuery = {
  page: number;
};

type TCreateCustomer = {
  onSuccess?: () => void;
};

const useCustomerQuery = ({ page }: TQuery) => {
  const { isPending, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["list-customer", page],
    queryFn: () => getDataCustomer({ page }),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    enabled: page !== 0,
  });

  return {
    data: data?.data || [],
    isPending,
    isFetching,
    isPlaceholderData,
  };
};

const useCreateCustomerQuery = ({ onSuccess }: TCreateCustomer) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createCustomer,
    onSuccess: (d) => {
      if (d) {
        if (onSuccess) {
          onSuccess();
        }
      }
      queryClient.invalidateQueries({ queryKey: ["list-customer"] });
    },
  });

  return {
    createCustomer: mutate,
  };
};

const useDeleteCustomerQuery = ({ onSuccess }: TCreateCustomer) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: (d) => {
      if (d) {
        if (onSuccess) {
          onSuccess();
        }
      }
      queryClient.invalidateQueries({ queryKey: ["list-customer"] });
    },
  });

  return {
    deleteCustomer: mutate,
  };
};

const useUpdateCustomerQuery = ({ onSuccess }: TCreateCustomer) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateCustomer,
    onSuccess: (d) => {
      if (d) {
        if (onSuccess) {
          onSuccess();
        }
      }
      queryClient.invalidateQueries({ queryKey: ["list-customer"] });
    },
  });

  return {
    updateCustomer: mutate,
  };
};

export {
  useCustomerQuery,
  useUpdateCustomerQuery,
  useDeleteCustomerQuery,
  useCreateCustomerQuery,
};
