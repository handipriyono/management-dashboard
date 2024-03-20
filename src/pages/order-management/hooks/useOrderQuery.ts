import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getDataOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../api/index";

type TQuery = {
  page: number;
};

type Tparams = {
  onSuccess?: () => void;
};

const useOrderListQuery = ({ page }: TQuery) => {
  const { isPending, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["list-order", page],
    queryFn: () => getDataOrder({ page }),
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

const useCreateOrderQuery = ({ onSuccess }: Tparams) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createOrder,
    onSuccess: (d) => {
      if (d) {
        if (onSuccess) {
          onSuccess();
        }
      }
      queryClient.invalidateQueries({ queryKey: ["list-order"] });
    },
  });

  return {
    createOrder: mutate,
  };
};

const useDeleteOrderQuery = ({ onSuccess }: Tparams) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteOrder,
    onSuccess: (d) => {
      if (d) {
        if (onSuccess) {
          onSuccess();
        }
      }
      queryClient.invalidateQueries({ queryKey: ["list-order"] });
    },
  });

  return {
    deleteOrder: mutate,
  };
};

const useUpdateOrderQuery = ({ onSuccess }: Tparams) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateOrder,
    onSuccess: (d) => {
      if (d) {
        if (onSuccess) {
          onSuccess();
        }
      }
      queryClient.invalidateQueries({ queryKey: ["list-order"] });
    },
  });

  return {
    updateOrder: mutate,
  };
};

export {
  useOrderListQuery,
  useCreateOrderQuery,
  useDeleteOrderQuery,
  useUpdateOrderQuery,
};
