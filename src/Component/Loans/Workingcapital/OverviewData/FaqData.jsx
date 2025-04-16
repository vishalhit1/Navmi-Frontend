import { Accordion, Col } from "react-bootstrap"
import ApplyLoan from "../../Personalloans/ApplyLoan"

const FaqData = () => {
    return (
        <div>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>FAQs</h3>
            </section>
            <Col lg={12} className="Newfaqs" style={{ marginTop: '60px' }}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. Am I Eligible for Personal Loan?</Accordion.Header>
                        <Accordion.Body>
                            You are just required to have a fixed or regular income to get Personal Loan whether you are a salaried individual, self-employed business person or professional. Eligibility is affected by the company you are employed in, your credit history and your residence's location.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. How Loan Amount or EMI is decided?</Accordion.Header>
                        <Accordion.Body>
                            For the amount of Personal Loan, in case of salaried people, bank / financial institution takes care that DBR (Debt Burden Ratio) is not more than 50% of your Take Home Salary. Here, the existing EMIs are also being considered. For the self-employed, the loan value is determined on the basis of the profit earned.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>2. How Loan Amount or EMI is decided?</Accordion.Header>
                        <Accordion.Body>
                            For the amount of Personal Loan, in case of salaried people, bank / financial institution takes care that DBR (Debt Burden Ratio) is not more than 50% of your Take Home Salary. Here, the existing EMIs are also being considered. For the self-employed, the loan value is determined on the basis of the profit earned.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>3. How My CIBIL Score Matters?</Accordion.Header>
                        <Accordion.Body>
                            CIBIL Score plays a major role in your loan approval. The Credit Information Bureau of India Limited (CIBIL) is the Central Bank of Data that records your repayment history of Credit Card bills and loans. A good CIBIL score increase the chances of getting loan at good rate with higher eligibility.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>4. Do I have to pay any charge for Personal Loan?</Accordion.Header>
                        <Accordion.Body>
                            Other than the EMI there are only two charges paid when applied for Personal Loan - one is Processing Fee and other could be Pre-Closure Charges (depends from lender to lender).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>5. Can I take my spouse as co-applicant?</Accordion.Header>
                        <Accordion.Body>
                            Yes, the spouse or a blood relative can be taken as co-applicant to increase the loan amount or eligibility. This way the income can be clubbed and the loan amount can be increased.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>6. How to repay the loan?</Accordion.Header>
                        <Accordion.Body>
                            The loan can be repaid in form of Equated Monthly Installment (EMI) via post-dated checks (PDCs) in the name of the bank or through Electronic Clearing Services (ECS).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>7. How to prepay the Personal Loan?</Accordion.Header>
                        <Accordion.Body>
                            Most of the banks have pre-payment penalty. You might have to pay the pre-closure charges up to 3 - 5%. Few lenders do not charge you after a certain period.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>8. How Reducing Rate and Flat Rate is different?</Accordion.Header>
                        <Accordion.Body>
                            As the word justifies, Reducing Balance Interest Rate needs the borrower to pay interest only on the remaining principle balance, i.e. the balance that remains outstanding after getting reduced by the principal repayment. Flat Interest Rate is wherein the borrower needs to pay interest on the entire loan balance throughout the loan term. Thus, interest component does not decrease on paid principle. Interest remains flat in all the EMIs.
                            <br />
                            <br />
                            Navmi Finserrv Pvt. Ltd Loans has the expertise in Personal Loan and we have been associated with various lenders in the market over a decade. Our well-versed team will guide you to the best option and with the help of our tools and calculators, you can fetch up the best deal in the market.We understand your need and the reason for taking a personal loan. In our language it’s a loan of urgency many a times.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </div>
    )
}

export default FaqData
