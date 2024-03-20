import { Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import useAuth from "../../commons/hooks/useAuth";
import "./style.scss";

const AuthPage = () => {
  const { onLogin, isLoggedIn, setUserName, userName } = useAuth();

  return isLoggedIn ? (
    <Navigate to="/customer-management" />
  ) : (
    <Container className="container-login">
      <div className="login-wrapper">
        <div className="d-flex justify-content-center align-content-center">
          <Image src="./cat.webp" width="230px" />
        </div>

        <div className="sign-in-text">Sign in</div>
        <InputGroup className="mb-3">
          <InputGroup.Text>@</InputGroup.Text>
          <Form.Control
            size="lg"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            aria-label="Username"
          />
        </InputGroup>

        <Form.Control
          size="lg"
          type="password"
          placeholder="Password"
          required
        />

        <div className="d-grid mt-5">
          <Button
            disabled={!userName}
            onClick={onLogin}
            variant="primary"
            size="lg"
            style={{ fontWeight: "bold" }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AuthPage;
