import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { TItemTable } from "../types";

type TModalView = {
  show: boolean;
  data: TItemTable | null;
  onClose: () => void;
};

function ModalView({ show, data, onClose }: TModalView) {
  return (
    <>
      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>Order Number</div>
                <div>{data?.orderNumber}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>Created At</div>
                <div>{data?.createdAt}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>Total</div>
                <div>{data?.total}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>Product Ids</div>
                <div>{data?.productIds?.join(",")}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex flex-lg-row ">
                <div style={{ width: "120px" }}>Username</div>
                <div>{data?.username}</div>
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
