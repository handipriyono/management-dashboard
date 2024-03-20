import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import { TCreateProduct, TItemTable } from "../types/index";

type TModalAdd = {
  show: boolean;
  onClose: () => void;
  onSubmitData: (d: TCreateProduct) => void;
  isEdit: boolean;
  data: TItemTable | null;
};

function ModalAdd({ show, data, onClose, onSubmitData, isEdit }: TModalAdd) {
  const [userName, setUserName] = useState("");
  const [productIds, setProductIds] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const onSubmit = () => {
    const id = { id: data?.id };
    onSubmitData({
      username: userName,
      productIds: productIds,
      address: address,
      note,
      ...id,
    });
  };

  useEffect(() => {
    if (data) {
      setUserName(data.username);
      setProductIds(data.productIds);
      setAddress(data.address);
      setNote(data.note);
    }
  }, [data]);

  return (
    <>
      <Modal show={show || isEdit} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit Order" : "Add Order"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <InputGroup className="mb-3">
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  autoFocus
                  placeholder="input username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </InputGroup>
              <Form.Control
                type="input Product Ids"
                value={productIds}
                onChange={(e) => setProductIds(e.target.value)}
                placeholder="input product id ( 1, 2, 3, 4..)"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder="input address ..."
              />
            </Form.Group>

            <InputGroup>
              <Form.Control
                as="textarea"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Input additional note."
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;
