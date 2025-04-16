import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Headerdashboard from "./Headerdashboard";
import Footerdashboard from "./Footerdashboard";
const LoanOffers = () => {
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
            <h3>Insta Loan Offers</h3>
            <div className="profiledetails">
              <div className="block">
                <a href="#">
                  <div className="box box_bowShadow">
                    <div className="split">
                      <div className="split-left">
                        <div className="totem">
                          <p className="totem-hd">20% off</p>
                          <p className="totem-bd">
                            Lovely Product for all to enjoy
                          </p>
                          <p className="totem-ft">all varieties</p>
                        </div>
                      </div>
                      <div className="split-right">
                        <img
                          src="http://placehold.it/110x130/ea0f6b/ffffff&text=product"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* end box */}
                </a>
              </div>
              {/* end block */}
              <div className="block">
                <a href="#">
                  <div className="box box_bowShadow">
                    <div className="split">
                      <div className="split-left">
                        <div className="totem">
                          <p className="totem-hd">20% off</p>
                          <p className="totem-bd">
                            Lovely Product for all to enjoy
                          </p>
                          <p className="totem-ft">all varieties</p>
                        </div>
                      </div>
                      <div className="split-right">
                        <img
                          src="http://placehold.it/110x130/ea0f6b/ffffff&text=product"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* end box */}
                </a>
              </div>
              {/* end block */}
              <div className="block">
                <a href="#">
                  <div className="box box_bowShadow">
                    <div className="split">
                      <div className="split-left">
                        <div className="totem">
                          <p className="totem-hd">20% off</p>
                          <p className="totem-bd">
                            Lovely Product for all to enjoy
                          </p>
                          <p className="totem-ft">all varieties</p>
                        </div>
                      </div>
                      <div className="split-right">
                        <img
                          src="http://placehold.it/110x130/ea0f6b/ffffff&text=product"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* end box */}
                </a>
              </div>
              {/* end block */}
              <div className="block">
                <a href="#">
                  <div className="box box_bowShadow">
                    <div className="split">
                      <div className="split-left">
                        <div className="totem">
                          <p className="totem-hd">20% off</p>
                          <p className="totem-bd">
                            Lovely Product for all to enjoy
                          </p>
                          <p className="totem-ft">all varieties</p>
                        </div>
                      </div>
                      <div className="split-right">
                        <img
                          src="http://placehold.it/110x130/ea0f6b/ffffff&text=product"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* end box */}
                </a>
              </div>
              {/* end block */}
              <div className="block">
                <a href="#">
                  <div className="box box_bowShadow">
                    <div className="split">
                      <div className="split-left">
                        <div className="totem">
                          <p className="totem-hd">20% off</p>
                          <p className="totem-bd">
                            Lovely Product for all to enjoy
                          </p>
                          <p className="totem-ft">all varieties</p>
                        </div>
                      </div>
                      <div className="split-right">
                        <img
                          src="http://placehold.it/110x130/ea0f6b/ffffff&text=product"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* end box */}
                </a>
              </div>
              {/* end block */}
              <div className="block">
                <a href="#">
                  <div className="box box_bowShadow">
                    <div className="split">
                      <div className="split-left">
                        <div className="totem">
                          <p className="totem-hd">20% off</p>
                          <p className="totem-bd">
                            Lovely Product for all to enjoy
                          </p>
                          <p className="totem-ft">all varieties</p>
                        </div>
                      </div>
                      <div className="split-right">
                        <img
                          src="http://placehold.it/110x130/ea0f6b/ffffff&text=product"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* end box */}
                </a>
              </div>
              {/* end block */}
              <div className="block">
                <a href="#">
                  <div className="box box_bowShadow">
                    <div className="split">
                      <div className="split-left">
                        <div className="totem">
                          <p className="totem-hd">20% off</p>
                          <p className="totem-bd">
                            Lovely Product for all to enjoy
                          </p>
                          <p className="totem-ft">all varieties</p>
                        </div>
                      </div>
                      <div className="split-right">
                        <img
                          src="http://placehold.it/110x130/ea0f6b/ffffff&text=product"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* end box */}
                </a>
              </div>
              {/* end block */}
              <div className="block">
                <a href="#">
                  <div className="box box_bowShadow">
                    <div className="split">
                      <div className="split-left">
                        <div className="totem">
                          <p className="totem-hd">20% off</p>
                          <p className="totem-bd">
                            Lovely Product for all to enjoy
                          </p>
                          <p className="totem-ft">all varieties</p>
                        </div>
                      </div>
                      <div className="split-right">
                        <img
                          src="http://placehold.it/110x130/ea0f6b/ffffff&text=product"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* end box */}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footerdashboard/>
    </div>
  );
};

export default LoanOffers;
