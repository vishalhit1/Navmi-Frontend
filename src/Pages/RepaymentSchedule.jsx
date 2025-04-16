import { Col, Container, Row } from "react-bootstrap"

const RepaymentSchedule = () => {
    return (
        <div>
            <section className="blogss">
                <section className="introduction">
                    <h3>Repayment Schedule</h3>
                </section>
                <section className="allblogs">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <table className="mt-4 table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ background: '#DA3731' }}>Loan Amount :</th>
                                            <th style={{ background: '#DA3731' }}>Total Interest Payable :</th>
                                            <th style={{ background: '#DA3731' }}>Loan Tenure :</th>
                                            <th style={{ background: '#DA3731' }}>Total Payment :</th>
                                            <th style={{ background: '#DA3731' }}>EMI Start From</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ fontSize: '21px' }}><span style={{ fontSize: '30px' }}>$</span> 5247</td>
                                            <td style={{ fontSize: '21px' }}>10 %</td>
                                            <td style={{ fontSize: '21px' }}>36 Months</td>
                                            <td style={{ fontSize: '21px' }}><span style={{ fontSize: '30px' }}>$</span> 2470</td>
                                            <td style={{ fontSize: '21px' }}>36 Months</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <div className="radiocheckk">
                            <div className="form-check" style={{ marginRight: '35px' }}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Monthly
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Yearly
                                </label>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <table className="mt-4 table table-striped">
                                    <thead>
                                        <tr>
                                            <th>SR No.</th>
                                            <th>Monthly</th>
                                            <th>Principal</th>
                                            <th>Interest</th>
                                            <th>Outstanding</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Dec - 2023</td>
                                            <td>23,934</td>
                                            <td>8,333</td>
                                            <td>9,76,066</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Dec - 2023</td>
                                            <td>23,934</td>
                                            <td>8,333</td>
                                            <td>9,76,066</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Dec - 2023</td>
                                            <td>23,934</td>
                                            <td>8,333</td>
                                            <td>9,76,066</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Dec - 2023</td>
                                            <td>23,934</td>
                                            <td>8,333</td>
                                            <td>9,76,066</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Dec - 2023</td>
                                            <td>23,934</td>
                                            <td>8,333</td>
                                            <td>9,76,066</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Dec - 2023</td>
                                            <td>23,934</td>
                                            <td>8,333</td>
                                            <td>9,76,066</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Dec - 2023</td>
                                            <td>23,934</td>
                                            <td>8,333</td>
                                            <td>9,76,066</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Dec - 2023</td>
                                            <td>23,934</td>
                                            <td>8,333</td>
                                            <td>9,76,066</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </div>
    )
}

export default RepaymentSchedule
