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
                        <Accordion.Header>1.  What is life insurance, and how does it work?</Accordion.Header>
                        <Accordion.Body>
                            Life insurance is a contract between you and an insurance company. You pay regular premiums, and in exchange, the insurer provides a payout (death benefit) to your beneficiaries when you pass away.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Who needs life insurance?</Accordion.Header>
                        <Accordion.Body>
                            Anyone with financial dependents, such as family members or business partners, should consider life insurance to provide for their loved ones in case of their death.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. What types of life insurance are there?</Accordion.Header>
                        <Accordion.Body>
                            The main types include term life insurance, whole life insurance, universal life insurance, and variable life insurance. Each has its own features and benefits.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. How much life insurance coverage do I need?</Accordion.Header>
                        <Accordion.Body>
                            The amount of coverage depends on your financial obligations and goals. It's often recommended to have coverage that's at least 5-10 times your annual income.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>5. What is the difference between term and permanent life insurance?</Accordion.Header>
                        <Accordion.Body>
                            Term life insurance provides coverage for a specific term, while permanent life insurance (e.g., whole or universal life) lasts for your entire life and may include a cash value component.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>6. How are life insurance premiums determined?</Accordion.Header>
                        <Accordion.Body>
                            Premiums are based on factors like your age, health, lifestyle, coverage amount, and the type of policy. Younger, healthier individuals typically pay lower premiums.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>7. Can I change my life insurance policy after purchasing it?</Accordion.Header>
                        <Accordion.Body>
                            Some policies allow for changes, but it's important to understand the terms and limitations. Permanent policies often offer flexibility, while term policies have fixed terms.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>8. Is life insurance taxable?</Accordion.Header>
                        <Accordion.Body>
                            In most cases, life insurance proceeds paid to beneficiaries are not subject to federal income tax. However, there can be exceptions for large estates.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>9. Can I have multiple life insurance policies?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you can have multiple life insurance policies to tailor coverage to different needs. It's important to ensure the total coverage amount is suitable.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>10. What happens if I stop paying my life insurance premiums?</Accordion.Header>
                        <Accordion.Body>
                            If you stop paying premiums, your policy may lapse, and coverage will end. Some policies have options like a grace period or paid-up insurance that may provide reduced coverage.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>11. How Does Insurance Work?</Accordion.Header>
                        <Accordion.Body>
                            Insurance works by spreading out the financial risk of unexpected events. When you buy insurance, you pay a small amount of money called a premium to the insurance company. In return, the company promises to help you if something bad happens. They collect premiums from many people, which creates a pool of money. When someone in the pool faces a problem covered by the insurance, like an accident or illness, the company uses the money from the pool to help them pay the bills. This way, individuals and businesses can protect themselves from big financial losses that could be difficult to handle on their own.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                        <Accordion.Header>12. What is Insurance Premium?</Accordion.Header>
                        <Accordion.Body>
                            A premium is the sum of money you pay to an insurance provider in exchange for the protection they offer. Normally, it is paid on a regular schedule, such monthly or yearly. Numerous variables, such as the type of insurance, the coverage limits, the degree of risk involved with the insured person or property, and other pertinent information, affect the premium amount.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12">
                        <Accordion.Header>13. What is Insurance Claim?</Accordion.Header>
                        <Accordion.Body>
                            An insurance claim is a formal request you make to your insurance company when something bad happens that is covered by your insurance policy. You're asking the company to provide financial help as per the terms of your policy. You give them details and proof of what happened, and if they agree, they'll provide you with the appropriate compensation or support.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13">
                        <Accordion.Header>14. Important Aspects While Buying Insurance</Accordion.Header>
                        <Accordion.Body>
                            <ul className="uli-li">
                                <li>Ensure it covers your needs..</li>
                                <li>Check maximum payout amounts..</li>
                                <li>Know your out-of-pocket expenses..</li>
                                <li>Compare premiums from different insurers..</li>
                                <li> Confirm if your preferred providers are included..</li>
                                <li>Understand how to claim and required documents..</li>
                                <li> Know what's not covered..</li>
                                <li>Be aware of any waiting times..</li>
                                <li>Check policy renewal terms..</li>
                                <li>Research customer reviews and support quality.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="14">
                        <Accordion.Header>15. Advantages of Buying Insurance</Accordion.Header>
                        <Accordion.Body>
                            <ul className="uli-li">
                                <li>Insurance provides a safety net against unexpected events, minimizing the financial impact on you or your family..</li>
                                <li>Knowing you're covered helps reduce stress and worry about potential risks..</li>
                                <li>Insurance spreads the financial burden across a larger group, making costs manageable for individuals..</li>
                                <li>Certain types of insurance, like auto insurance, are often legally required, ensuring compliance and protection..</li>
                                <li>Insurance supports long-term financial planning by safeguarding assets and future needs.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </div>
    )
}

export default FaqData
