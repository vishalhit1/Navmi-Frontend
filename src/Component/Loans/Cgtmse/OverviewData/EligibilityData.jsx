import ApplyLoan from "../ApplyLoan"

const EligibilityData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Eligibility</h3>
                <p style={{ marginTop: '60px' }}>Since it is unsecured in nature, lenders have stricter norms regarding eligibility and sanctioning of CGTMSE Loan. But some of the basic eligibility criteria the applicant must fulfill are:</p>
                <ul className="listloan">
                    <li>Micro and Small Enterprises as per MSME guidelines</li>
                    <li>Should be in operation for at least 2 years (for existing businesses)</li>
                    <li>New businesses can also apply based on business plans and projections</li>
                </ul>
            </section>
        </>
    )
}

export default EligibilityData
