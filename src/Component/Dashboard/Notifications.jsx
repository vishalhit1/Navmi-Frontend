import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Headerdashboard from "./Headerdashboard";
import Footerdashboard from "./Footerdashboard";
const Notification = () => {
  const [isOpened, setIsOpened] = useState(null)

  const toggleSidebars = (val) => {
    setIsOpened(val)
  }

  useEffect(() => {

  }, []);

  return (
    <div>
      <Headerdashboard/>
      <Container fluid>
        <Row>
          <Sidebar toggleSidebars={toggleSidebars} />

          <Col lg={9} className={`sidebarcontent ${isOpened ? '' : 'full-width'}`}>
            <h3>Notification</h3>
            <div className="profiledetails">
              <div className="row notification-container">
                <div className="card notification-card notification-invitation">
                  <div className="card-body">
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ width: "70%" }}>
                            <div className="card-title">
                              <i className="fa fa-bell" aria-hidden="true"></i>{" "}
                              Jane invited you to join <b>Familia</b> group
                            </div>
                          </td>
                          <td style={{ width: "30%" }}>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger dismiss-notification"
                            >
                              Dismiss
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card notification-card notification-warning">
                  <div className="card-body">
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ width: "70%" }}>
                            <div className="card-title">
                              <i className="fa fa-bell" aria-hidden="true"></i>{" "}
                              Your expenses for <b>Groceries</b> has exceeded
                              its budget
                            </div>
                          </td>
                          <td style={{ width: "30%" }}>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger dismiss-notification"
                            >
                              Dismiss
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card notification-card notification-danger">
                  <div className="card-body">
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ width: "70%" }}>
                            <div className="card-title">
                              <i className="fa fa-bell" aria-hidden="true"></i>{" "}
                              Insufficient budget to create <b>Clothing</b>
                              budget category
                            </div>
                          </td>
                          <td style={{ width: "30%" }}>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger dismiss-notification"
                            >
                              Dismiss
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card notification-card notification-reminder">
                  <div className="card-body">
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ width: "70%" }}>
                            <div className="card-title">
                              <i className="fa fa-bell" aria-hidden="true"></i>{" "}
                              You have <b>2</b> upcoming payment(s) this week
                            </div>
                          </td>
                          <td style={{ width: "30%" }}>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger dismiss-notification"
                            >
                              Dismiss
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footerdashboard/>
    </div>
  );
};

export default Notification;
