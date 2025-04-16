import { Row, Col } from "react-bootstrap"
import ApplyLoan from "../Applyloan"

const EmiCalculatorData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>EMI Calculator</h3>
                <p style={{ marginTop: '60px' }}>A <b>Personal Loan EMI Calculator</b> is a powerful tool that helps you estimate your <b>monthly installment (EMI)</b> before applying for a loan. At <b>Navmi Finserrv Pvt. Ltd.</b>, we make financial planning easier by providing a quick and accurate EMI calculation, so you can choose a repayment plan that suits your budget.</p>
                <Row style={{ justifyContent: 'space-evenly' }}>
                    <Col lg={5}>
                        <div>
                            <form className="form-calculator">
                                <div className="form-group">
                                    <label htmlFor="amount">Loan Amount:</label>
                                    <div className="input-group mb-4">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">$</div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="amount"
                                            defaultValue={100000}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="amount">Interest Rate Per Year :</label>
                                    <div className="input-group mb-4">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">%</div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="interest"
                                            defaultValue="10.5"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="amount">Loan Tenure :</label>
                                    <div className="input-group mb-4">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Months</div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="tenure"
                                            defaultValue={36}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="emi-details">
                            <div className="emi-details-head">
                                <h6>Your EMI Details</h6>
                            </div>
                            <div className="emi-details-box">
                                <p style={{ marginBottom: 5 }}>Loan Amount :</p>
                                <h5><span>$</span>5247</h5>
                            </div>
                            <div className="emi-details-box">
                                <Row>
                                    <Col lg={6}>
                                        <p style={{ marginBottom: 5 }}>Total Interest Payable :</p>
                                        <h5><span>$</span>52470</h5>
                                    </Col>
                                    <Col lg={6}>
                                        <p style={{ marginBottom: 15 }}>Loan Tenure :</p>
                                        <h5>36 Months</h5>
                                    </Col>
                                </Row>
                            </div>
                            <div className="emi-details-box no-bottom-border">
                                <p style={{ marginBottom: 5 }}>Total Payment</p>
                                <h5><span>$</span>152470</h5>
                            </div>
                        </div>
                        <button className="schedule">Schedule</button>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default EmiCalculatorData
