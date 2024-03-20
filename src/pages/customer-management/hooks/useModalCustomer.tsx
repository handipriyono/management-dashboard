import { useState } from "react";
import { TCustomerItem } from "../types/index";
import {
  useCreateCustomerQuery,
  useDeleteCustomerQuery,
  useUpdateCustomerQuery,
} from "../hooks/useCustomerQuery";

type TUseModal = {
  onSuccess: () => void;
};

const useModalCustomer = ({ onSuccess }: TUseModal) => {
  const [modalName, setModalName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [selectedItem, setSelectedItem] = useState({} as TCustomerItem);

  const { createCustomer } = useCreateCustomerQuery({
    onSuccess: () => {
      onCloseModal();
      setToastMsg("Customer has been created");
      setShowToast(true);
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  const { updateCustomer } = useUpdateCustomerQuery({
    onSuccess: () => {
      onCloseModal();
      setToastMsg("Customer data has been updated");
      setShowToast(true);
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  const { deleteCustomer } = useDeleteCustomerQuery({
    onSuccess: () => {
      onCloseModal();
      setToastMsg("Customer has been deleted");
      setShowToast(true);
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  const onClickModal = (name: string) => {
    setModalName(name);
  };

  const onSubmitCreate = (d: TCustomerItem) => {
    createCustomer(d);
  };

  const onSubmitDelete = () => {
    deleteCustomer({
      id: selectedItem?.id || 1,
    });
  };

  const onCloseModal = () => {
    setModalName("");
    setSelectedItem({} as TCustomerItem);
  };

  const onSubmitUpdate = (item: TCustomerItem) => {
    updateCustomer({
      id: selectedItem?.id,
      ...item,
    });
  };

  const onSubmitData = (d?: TCustomerItem) => {
    if (modalName === "add-customer") {
      onSubmitCreate(d as TCustomerItem);
    } else if (modalName === "edit-customer") {
      onSubmitUpdate(d as TCustomerItem);
    } else if (modalName === "delete-customer") {
      onSubmitDelete();
    }
  };

  return {
    modalName,
    onClickModal,
    onCloseModal,
    onSubmitCreate,
    onSubmitDelete,
    onSubmitUpdate,
    onSubmitData,
    selectedItem,
    toast: {
      showToast,
      setShowToast,
      setToastMsg,
      toastMsg,
    },
    onOpenModal: {
      add: () => onClickModal("add-customer"),
      edit: (item: TCustomerItem) => {
        onClickModal("edit-customer");
        setSelectedItem(item);
      },
      delete: (item: TCustomerItem) => {
        onClickModal("delete-customer");
        setSelectedItem(item);
      },
      view: (item: TCustomerItem) => {
        onClickModal("view-customer");
        setSelectedItem(item);
      },
    },
  };
};

export default useModalCustomer;
