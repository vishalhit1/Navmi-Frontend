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
                        <Accordion.Header>1.  What is health insurance?</Accordion.Header>
                        <Accordion.Body>
                            Health insurance is a policy that helps cover medical expenses and treatments, offering financial protection against unexpected healthcare costs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Why do I need health insurance?</Accordion.Header>
                        <Accordion.Body>
                            Health insurance ensures you can access medical care without worrying about high costs, protecting your finances and well-being.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. What does health insurance cover?</Accordion.Header>
                        <Accordion.Body>
                            Health insurance covers hospitalization, doctor visits, surgeries, medications, and preventive care. Coverage varies by plan.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. How does health insurance work?</Accordion.Header>
                        <Accordion.Body>
                            You pay a premium to the insurer. When you need medical care, the insurance helps cover the costs as per your plan's terms.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>5. Can I choose my doctor?</Accordion.Header>
                        <Accordion.Body>
                            Depending on the plan, you might need to use network providers. Some plans allow choosing any doctor, but costs can differ.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>6. What's a deductible?</Accordion.Header>
                        <Accordion.Body>
                            It's the initial amount you pay before insurance starts covering costs. Higher deductibles often mean lower premiums.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>7. Is there a waiting period?</Accordion.Header>
                        <Accordion.Body>
                            Some plans have waiting periods for certain treatments. Review the policy to understand waiting period specifics.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>8. Are pre-existing conditions covered?</Accordion.Header>
                        <Accordion.Body>
                            Some plans cover pre-existing conditions after a waiting period. Check policy details to understand coverage.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>9. How do I make a claim?</Accordion.Header>
                        <Accordion.Body>
                            In case of treatment, submit documents like bills, prescriptions, and claim forms to the insurer for reimbursement.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>10. Are there tax benefits?</Accordion.Header>
                        <Accordion.Body>
                            Yes, health insurance premiums can offer tax benefits under certain tax laws. Consult a tax professional for details.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </div>
    )
}

export default FaqData
