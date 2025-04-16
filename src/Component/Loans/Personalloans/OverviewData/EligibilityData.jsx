import ApplyLoan from "../ApplyLoan"

const EligibilityData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Eligibility</h3>
                <p style={{ marginTop: '60px' }}>Since it is unsecured in nature, lenders have stricter norms regarding eligibility and sanctioning of Personal Loan. But some of the basic eligibility criteria the applicant must fulfill are:</p>
                <ul className="listloan">
                    <li>Indian Resident</li>
                    <li> Min. 25 years age</li>
                    <li>Salaried with 2 years’ experience</li>
                    <li>Continues Source of Income.</li>
                    <li>Net take home should be above 20k</li>
                </ul>
            </section>
        </>
    )
}

export default EligibilityData
