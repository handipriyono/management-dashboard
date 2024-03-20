import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarMenu from "../../commons/components/navbar";
import Button from "react-bootstrap/Button";
import ListTable from "./components/ListTable";
import useCustomerManagement from "./hooks/useCustomerManagement";
import useModalCustomer from "./hooks/useModalCustomer";
import Form from "react-bootstrap/Form";
import ModalAdd from "./components/ModalAdd";
import ToastCustom from "../../commons/components/toast";
import ModalConfirm from "../../commons/components/modal-confirm";
import ModalView from "./components/ModalView";

function CustomerManagement() {
  const { data, onClickPage, page, setPage } = useCustomerManagement();
  const {
    modalName,
    onOpenModal,
    onCloseModal,
    toast,
    selectedItem,
    onSubmitData,
  } = useModalCustomer({
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
              Customer Management
              <Button
                onClick={onOpenModal.add}
                style={{ fontWeight: "bold" }}
                variant="warning"
                className="m-3 "
              >
                Add New
              </Button>
            </div>
            <div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search name, email..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
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
                activePage={page}
                dataTable={data}
                onOpenModal={onOpenModal}
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

      <ModalAdd
        onSubmitCreate={onSubmitData}
        isEdit={modalName === "edit-customer"}
        show={modalName === "add-customer"}
        onClose={onCloseModal}
        data={selectedItem}
      />
      <ModalConfirm
        show={modalName === "delete-customer"}
        onClose={onCloseModal}
        onSubmit={onSubmitData}
        text={`Are you sure want to delete? ${selectedItem?.username}`}
      />
      <ModalView
        data={selectedItem}
        show={modalName === "view-customer"}
        onClose={onCloseModal}
      />
    </>
  );
}

export default CustomerManagement;
