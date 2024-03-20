import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { TCustomerItem } from "../types";

type TModalView = {
  show: boolean;
  data: TCustomerItem;
  onClose: () => void;
};

function ModalView({ show, data, onClose }: TModalView) {
  return (
    <>
      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>Name</div>
                <div>{data?.name}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>User Name</div>
                <div>{data?.username}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>Total Order</div>
                <div>{data?.totalOrder} order</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>Email</div>
                <div>{data?.email}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>Address</div>
                <div>{data?.address}</div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalView;
