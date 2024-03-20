import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarMenu from "../../commons/components/navbar";
import Button from "react-bootstrap/Button";
import ListTable from "./components/ListTable";
import useOrderManagement from "./hooks/useOrderManagement";
import useModalOrder from "./hooks/useModalOrder";
import Form from "react-bootstrap/Form";
import ModalAdd from "./components/ModalAdd";
import ToastCustom from "../../commons/components/toast";
import ModalView from "./components/ModalView";
import ModalConfirm from "../../commons/components/modal-confirm";

function OrderManagement() {
  const { data, onClickPage, page, setPage } = useOrderManagement();
  const {
    modalName,
    onOpenModal,
    onCloseModal,
    toast,
    selectedItem,
    onSubmitData,
  } = useModalOrder({
    onSuccess: () => {
      setPage(1);
    },
  });

  return (
    <>
      <NavbarMenu />
      <Container
        fluid
        style={{
          backgroundColor: "#fff",
          paddingTop: "5px",
        }}
      >
        <div className="px-lg-5 pb-lg-3">
          <div className="d-flex justify-content-between justify-content-center align-content-center align-items-center ">
            <div
              style={{ fontSize: "20px", color: "#808080", fontWeight: "bold" }}
              className="pb-2 pt-2 pl-3"
            >
              Order Management
              <Button
                onClick={onOpenModal.add}
                style={{ fontWeight: "bold" }}
                variant="outline-info"
                className="m-3 "
              >
                Add New Order
              </Button>
            </div>
            <div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search orderId, customer..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="dark">Search</Button>
              </Form>
            </div>
          </div>
          <Row>
            <Col
              md="12"
              className="min-vh-100 "
              style={{ backgroundColor: "#fff" }}
            >
              <ListTable
                onOpenModal={onOpenModal}
                activePage={page}
                dataTable={data}
                onClickPage={onClickPage}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <ToastCustom
        showToast={toast.showToast}
        setShowToast={toast.setShowToast}
        message={toast.toastMsg}
      />

      <ToastCustom
        showToast={toast.showToast}
        setShowToast={toast.setShowToast}
        message={toast.toastMsg}
      />

      <ModalAdd
        onSubmitData={onSubmitData}
        isEdit={modalName === "edit-order"}
        show={modalName === "add-order"}
        onClose={onCloseModal}
        data={selectedItem}
      />
      <ModalConfirm
        show={modalName === "delete-order"}
        onClose={onCloseModal}
        onSubmit={onSubmitData}
        text={`order Number ${selectedItem?.orderNumber} will be deleted!`}
      />
      <ModalView
        data={selectedItem}
        show={modalName === "view-order"}
        onClose={onCloseModal}
      />
    </>
  );
}

export default OrderManagement;
