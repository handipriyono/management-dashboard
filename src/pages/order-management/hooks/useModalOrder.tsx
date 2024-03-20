import { useState } from "react";
import {
  useCreateOrderQuery,
  useDeleteOrderQuery,
  useUpdateOrderQuery,
} from "./useOrderQuery";
import { TItemTable } from "../types";

type TUseModal = {
  onSuccess: () => void;
};

type TCreateProduct = {
  username: string;
  productIds: string;
  address: string;
  note: string;
  id?: number;
};

const useModalOrder = ({ onSuccess }: TUseModal) => {
  const [modalName, setModalName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [selectedItem, setSelectedItem] = useState<TItemTable | null>(null);

  const { createOrder } = useCreateOrderQuery({
    onSuccess: () => {
      onCloseModal();
      setToastMsg("Order has been created");
      setShowToast(true);
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  const { updateOrder } = useUpdateOrderQuery({
    onSuccess: () => {
      onCloseModal();
      setToastMsg("Order data has been updated");
      setShowToast(true);
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  const { deleteOrder } = useDeleteOrderQuery({
    onSuccess: () => {
      onCloseModal();
      setToastMsg("Order has been deleted");
      setShowToast(true);
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  const onSubmitData = (d?: TCreateProduct) => {
    if (modalName === "add-order") {
      onSubmitCreate(d as TCreateProduct);
    } else if (modalName === "edit-order") {
      onSubmitUpdate(d as TCreateProduct);
    } else if (modalName === "delete-order") {
      onSubmitDelete();
    }
  };

  const onClickModal = (name: string) => {
    setModalName(name);
  };

  const onSubmitCreate = (d: TCreateProduct) => {
    createOrder(d);
  };

  const onSubmitDelete = () => {
    deleteOrder({
      id: selectedItem?.id || 1,
    });
  };

  const onCloseModal = () => {
    setModalName("");
    setSelectedItem({} as TItemTable);
  };

  const onSubmitUpdate = (item: TCreateProduct) => {
    updateOrder({
      id: selectedItem?.id,
      ...item,
    } as TCreateProduct);
  };

  return {
    modalName,
    onClickModal,
    onCloseModal,
    onSubmitCreate,
    selectedItem,
    onSubmitData,
    toast: {
      showToast,
      setShowToast,
      setToastMsg,
      toastMsg,
    },
    onOpenModal: {
      add: () => onClickModal("add-order"),
      edit: (item: TItemTable) => {
        onClickModal("edit-order");
        setSelectedItem(item);
      },
      delete: (item: TItemTable) => {
        onClickModal("delete-order");
        setSelectedItem(item);
      },
      view: (item: TItemTable) => {
        onClickModal("view-order");
        setSelectedItem(item);
      },
    },
  };
};

export default useModalOrder;
