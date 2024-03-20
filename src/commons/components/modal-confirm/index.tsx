import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type TModalConfirm = {
  show: boolean;
  onClose: () => void;
  onSubmit: () => void;
  text: string;
};

function ModalConfirm({ show, onClose, onSubmit, text }: TModalConfirm) {
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;
