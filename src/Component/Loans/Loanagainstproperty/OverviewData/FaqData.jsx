import { Accordion, Col } from "react-bootstrap"
import ApplyLoan from "../ApplyLoan"

const FaqData = () => {
    return (
        <div>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>FAQs</h3>
            </section>
            <Col lg={12} className="Newfaqs" style={{ marginTop: '60px' }}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. How does the lender decide the loan amount?</Accordion.Header>
                        <Accordion.Body>
                            Bank or lender will verify your repayment capacity. To calculate your loan amount - your income, age, qualifications, family member's income, assets, liability, continuity in business or job and finally 80 - 90% market value of the property is considered.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Can I keep a Co-applicant?</Accordion.Header>
                        <Accordion.Body>
                            Yes - you can keep your spouse or blood relative as a co-applicant which leads to increase your eligibility. But property owners or co-owners have to be there in the loan structure.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. What is the Processing Charge?</Accordion.Header>
                        <Accordion.Body>
                            Processing fee varies from bank to bank, however, most of the banks charge upto 1% of the loan amount.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. How the rate of interest is calculated?</Accordion.Header>
                        <Accordion.Body>
                            Interest is calculated on Daily Reducing Balance which reduces your interest on the reducing principle balance.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>5. What tenure will I get?</Accordion.Header>
                        <Accordion.Body>
                            Loans Against Property has a maximum tenure of 15 years, subject to the condition that it does not exceed your retirement age. This condition however can be flexible in certain cases.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>6. How to repay the loan?</Accordion.Header>
                        <Accordion.Body>
                            You repay the loan by EMIs which consist of Principle and Interest. EMI starts from the following month of the disbursement. You can do part payment too after 6 months as there are no charges.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>7. What kind of security does the bank consider?</Accordion.Header>
                        <Accordion.Body>
                            As the Loan Against Property justifies itself you need to mortgage your property for availing the loan. This mortgage is equitable mortgage by Memorandum of Entry by way of deposit of title deeds and/or such other collateral security, as may be necessary. Bank verifies the title of the property and if it is clear you can get the loan. There should not be any litigation.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>8. What are the foreclosure charges?</Accordion.Header>
                        <Accordion.Body>
                            Yes- you can foreclose your loan after 6months. Here, no foreclosure charge is applicable to individuals. You have to close it from your own funds. Few lenders charge if you do abalance transfer.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </div>
    )
}

export default FaqData
