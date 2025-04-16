import ApplyLoan from "../ApplyLoan"

const EligibilityData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Eligibility</h3>
                <ul class="listloan mt-5">
                    <li>Min. 21 years of age</li>
                    <li>Salaried with 1 years’ experience</li>
                    <li>Continues Source of Income</li>
                    <li>Net take home should be above 25k</li>
                </ul>
            </section>
        </>
    )
}

export default EligibilityData
