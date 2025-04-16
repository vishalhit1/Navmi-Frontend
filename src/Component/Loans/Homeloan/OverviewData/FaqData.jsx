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
                        <Accordion.Header>1. What is a home loan?</Accordion.Header>
                        <Accordion.Body>
                            A home loan is a loan used to buy a home. It is repaid over 15 to 30 years and is secured by the property being purchased. If the borrower fails to repay, the lender can take possession of the property.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. How do I qualify for a home loan?</Accordion.Header>
                        <Accordion.Body>
                            To qualify for a home loan, you typically need a good credit score (usually above 620), a steady income, and a low debt-to-income ratio. Lenders also consider your employment history. If you meet all of the lenders perimeters than you are eligible for a home loan.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3.Can I prepay my home loan?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you can usually prepay your home loan in two ways such as full prepayment and part prepayment. If you have the remaining principle amount availabe with then you can fully pay the amount and close the loan or the payment also can be made in parts and the principle will be reduced by the same amount.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. Is it possible to secure a 100% home loan from a bank?</Accordion.Header>
                        <Accordion.Body>
                            No, it is not possible to secure 100% loan from the bank.However banks provide upto 90-95% of the agreement value.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>5. What is the maximum home loan that I can get?</Accordion.Header>
                        <Accordion.Body>
                            The maximum home loan that you can get is not capped by any amount but it is given on the basis of the agreement value and also the borrorwers income eligibilty and credit history. generally banks provide 90-95% of the agreement value.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>6. What documentation is required for salaried professionals applying for a home loan? </Accordion.Header>
                        <Accordion.Body>
                            Salaried professionals applying for a home loan need to provide proof of identity, address, and income, along with employment proof, Professional certificate  income tax returns, property documents, bank statements.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>7. Can I apply for a home loan jointly with a friend or family member?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you can apply for a home loan jointly with a friend or family member. Lenders generally allow spouses, parents, siblings, or any other close relatives to be joint applicants for a home loan. Some lenders may also allow unrelated individuals to apply together, provided they meet the lender's eligibility criteria. However, it's important to note that all co-owners of the property must also be co-applicants for the loan.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>8. Who can be joint borrowers in a Home Loan?</Accordion.Header>
                        <Accordion.Body>
                            Joint borrowers for a home loan can include family members, spouses, or any two individuals willing to take joint responsibility for repaying the loan. Lenders typically require all co-owners of the property to be co-borrowers on the loan. Having a joint borrower can help increase the loan eligibility, as the income and creditworthiness of both borrowers are considered. It's important for joint borrowers to understand that they are equally responsible for repaying the loan, and any default can affect both borrowers' credit scores.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </div>
    )
}

export default FaqData
