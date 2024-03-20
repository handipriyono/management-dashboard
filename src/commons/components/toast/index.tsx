import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
type TToast = {
  showToast: boolean;
  setShowToast: (show: boolean) => void;
  message: string;
};

function ToastCustom({ showToast, setShowToast, message }: TToast) {
  return (
    <ToastContainer
      className="p-3 position-absolute "
      position={"top-end"}
      style={{ zIndex: 10, marginTop: "70px", marginRight: "100px" }}
    >
      <Toast
        bg="success"
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Success</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body style={{ color: "#fff" }}>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastCustom;
