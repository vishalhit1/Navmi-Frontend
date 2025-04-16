import ApplyLoan from "../Applyloan"


const EligibilityData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Eligibility</h3>
                <p style={{ marginTop: '60px' }}>Since it is unsecured in nature, lenders have stricter norms regarding eligibility and sanctioning of Working Capital Loan. But some of the basic eligibility criteria the applicant must fulfill are:</p>
                <ul className="listloan">
                    <li>Businesses with a minimum of 2 years of operational history</li>
                    <li>Good credit score (as per lender's criteria)</li>
                    <li>A steady stream of business income</li>
                </ul>
            </section>
        </>
    )
}

export default EligibilityData
