import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

function NavbarMenu() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("dataUser");
    navigate("/login");
  };

  const getDataUser = () => {
    try {
      const dataUser = localStorage.getItem("dataUser");
      if (dataUser) {
        return JSON.parse(dataUser);
      }
      return {};
    } catch (error) {
      return {};
    }
  };

  return (
    <Navbar sticky="top" expand="lg" style={{ backgroundColor: "#eee" }}>
      <Container>
        <Navbar.Brand href="#home">CATs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/order-management")}>
              Order Management
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/customer-management")}>
              Customer Management
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <OverlayTrigger
            trigger="click"
            placement="bottom-start"
            overlay={
              <Popover id="popover-basic">
                <Popover.Header as="h3">
                  Hi, {getDataUser()?.username}
                </Popover.Header>
                <Popover.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      email: {getDataUser()?.email}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      username: {getDataUser()?.username}
                    </ListGroup.Item>
                    <ListGroup.Item
                      role="button"
                      onClick={handleLogout}
                      variant="warning"
                    >
                      Logout ?
                    </ListGroup.Item>
                  </ListGroup>
                </Popover.Body>
              </Popover>
            }
          >
            <Navbar.Text>
              Signed in as: <a href="#login">{getDataUser()?.username}</a>
            </Navbar.Text>
          </OverlayTrigger>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
