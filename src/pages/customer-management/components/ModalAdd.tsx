import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { TCustomerItem } from "../types";

type TModalAdd = {
  show: boolean;
  onClose: () => void;
  onSubmitCreate: (data: TCustomerItem) => void;
  data: TCustomerItem;
  isEdit: boolean;
};

function ModalAdd({ show, onClose, onSubmitCreate, data, isEdit }: TModalAdd) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = () => {
    const id = { id: data?.id || null };
    onSubmitCreate({
      email,
      username,
      name: username,
      address,
      ...id,
    } as TCustomerItem);
  };

  const disableButton = () => {
    return !email || !username || !address;
  };

  useEffect(() => {
    if (data) {
      setEmail(data?.email);
      setUsername(data?.username);
      setAddress(data?.address);
    }
  }, [data]);

  return (
    <>
      <Modal show={show || isEdit} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit Customer" : "Add Customer"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  autoFocus
                  placeholder="input your username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </InputGroup>
              <Form.Control
                type="input your Email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <InputGroup>
              <Form.Control
                as="textarea"
                placeholder="Input your address.."
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={disableButton()}
            variant="primary"
            onClick={onSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;
