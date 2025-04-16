import { Col, Row, Table } from "react-bootstrap"
import ApplyLoan from "../ApplyLoan"
const Buyinsurance = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Who Should Buy Life Insurance? </h3>
                <Row className="mt-5">
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Parents of Young Children</h2>
                            <p>
                                Parents with young children should make life insurance a priority to secure their children's financial future. The death benefit can help cover daily living expenses, education costs, and other necessities, allowing the family to maintain stability during a difficult time.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Stay-at-Home Parents</h2>
                            <p>
                                Even if one parent does not bring in an income, their contributions are incredibly valuable. Life insurance can offer financial protection to cover household responsibilities and childcare expenses, ensuring that the surviving partner can cope without additional financial stress.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Couples Without Children</h2>
                            <p>
                                Couples without children should also think about life insurance, particularly if one partner depends on the other's income. A policy can help cover living expenses and debts, and help maintain the lifestyle of the surviving partner.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Homeowners with Mortgages</h2>
                            <p>
                                Those who own homes with outstanding mortgages should consider life insurance to shield their families from financial strain. The policy can pay off the mortgage, ensuring that loved ones are not forced to sell the home.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Business Owners</h2>
                            <p>
                                Business owners should look into life insurance to safeguard their business's financial stability. This ensures that business partners or employees are not left in a difficult position if something happens to the owner.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Individuals with Debts</h2>
                            <p>
                                If you have considerable debts, such as personal loans or credit card balances, life insurance can prevent your family from inheriting that financial burden. The death benefit can be used to settle outstanding obligations, providing peace of mind.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Elderly Parents or Dependents</h2>
                            <p>
                                If you financially support aging parents or other dependents, life insurance ensures they continue to receive assistance even after your passing. This coverage helps maintain their quality of life.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Young adults and singles</h2>
                            <p>
                                Young adults and singles without dependents can also benefit from life insurance. It can help cover funeral costs and any outstanding debts, reducing the financial burden on family members.
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Buyinsurance
